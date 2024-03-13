import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'JitsiTestApp';

  domain = 'meet.jit.si';

  api: any = null;

  envType: string = 'N/A';
  region: string = 'N/A';
  shard: string = 'N/A';
  displayName: string = '';

  browserSupported: boolean = false;
  mouseIsInFrame: boolean = false;
  cameraIsOn: boolean = false;
  displayNameIsChanged: boolean = false;

  ngAfterViewInit(): void {
    const options = {
      roomName: 'MedicalScanJitsi',
      width: 900,
      height: 600,
      parentNode: document.getElementById('meet'),
      lang: 'hu',
      userInfo: {
        displayName: 'Jitsi User',
        email: 'example@email.com'
      }
    }
    this.api = new JitsiMeetExternalAPI(this.domain, options);

    this.api!.addListener('browserSupport', (status: any) => {
      this.browserSupported = status;
    });

    this.api!.addListener('mouseEnter', (event: any) => {
      this.mouseIsInFrame = true;
    });

    this.api!.addListener('mouseLeave', (event: any) => {
      this.mouseIsInFrame = false;
    });

    this.api!.addListener('displayNameChange', (event: any) => {
      if (!this.displayNameIsChanged) {
        this.displayNameIsChanged = true;
      }
      this.displayName = event.displayname;
    });

    this.api!.addListener('videoMuteStatusChanged', (event: any) => {
      this.cameraIsOn = !event.muted;
    });
  }

  toggleVideoDevice() {
    if (this.api) {
      this.api.executeCommand('toggleVideo');
    }
  }

  requestDeploymentInfo() {
    if (this.api) {
      this.api.getDeploymentInfo().then((deploymentInfo: any) => {
        this.envType = deploymentInfo.envType;
        this.region = deploymentInfo.region;
        this.shard = deploymentInfo.shard;
      });
    }
  }
}
