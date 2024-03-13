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

  ngAfterViewInit(): void {
    const options = {
      roomName: 'MedicalScanJitsi',
      width: 700,
      height: 700,
      parentNode: document.getElementById('meet'),
      lang: 'hu'
    }
    const api = new JitsiMeetExternalAPI(this.domain, options);
  }
}
