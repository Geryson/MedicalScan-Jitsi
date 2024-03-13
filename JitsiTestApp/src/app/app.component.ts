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

  ngAfterViewInit(): void {
    const options = {
      roomName: 'MedicalScanJitsi',
      width: 900,
      height: 600,
      parentNode: document.getElementById('meet'),
      lang: 'hu'
    }
    this.api = new JitsiMeetExternalAPI(this.domain, options);

    this.api!.addListener('browserSupport', (status: any) => {
      console.log(status);
    });

    this.api!.addListener('mouseEnter', (event: any) => {
      console.log(event);
    });

    this.api!.addListener('displayNameChange', (event: any) => {
      console.log(event);
    });

    this.api!.getDeploymentInfo().then((deploymentInfo: any) => {
      console.log(deploymentInfo);
    });
  }

  toggleVideoDevice() {
    if(this.api) {
      this.api.executeCommand('toggleVideo');
    }
  }
}
