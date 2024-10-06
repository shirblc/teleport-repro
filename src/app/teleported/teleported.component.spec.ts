import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeleportDirective, TeleportOutletDirective } from '@ngneat/overview';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TeleportedComponent } from './teleported.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: "mock-target",
  template: `
    <section>
      <div [teleportOutlet]="'myTeleport'"></div>
    </section>
    <app-teleported></app-teleported>
  `,
  imports: [TeleportOutletDirective, TeleportedComponent, CommonModule],
  standalone: true,
})
export class MockTarget {}

describe('TeleportedComponent', () => {
  let component: TeleportedComponent;
  let fixture: ComponentFixture<MockTarget>;
  let componentDOM: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleportedComponent, TeleportDirective, MockTarget, TeleportOutletDirective, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockTarget);
    component = fixture.debugElement.query(By.css("app-teleported")).componentInstance as TeleportedComponent;
    componentDOM = fixture.debugElement.query(By.css("app-teleported")).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // This test is broken
  it("should show teleport", () => {
    expect(componentDOM.querySelector("#test-teleport")).toBeDefined();
    expect(componentDOM.querySelector("#test-teleport").textContent).toBe("teleported works!");
  })
});
