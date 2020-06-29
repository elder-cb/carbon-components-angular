import { TestBed, ComponentFixture } from "@angular/core/testing";
import { Component, Input, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { Link } from "./link.directive";

@Component({
	template: `<a href="https://angular.carbondesignsystem.com/" ibmLink>link</a>`
})
class TestLinkComponent {
}

@Component({
	template: `<a href="https://angular.carbondesignsystem.com/" [disabled]="1+1===2" ibmLink>link</a>`
})
class TestDisabledLinkComponent {
}

describe("Link", () => {
	it("should create a Link", () => {
		TestBed.configureTestingModule({
			declarations: [TestLinkComponent, Link]
		});

		let fixture: ComponentFixture<TestLinkComponent> = TestBed.createComponent(TestLinkComponent);
		let component: TestLinkComponent = fixture.componentInstance;
		fixture.detectChanges();

		expect(component).toBeTruthy();
		const directiveEl = fixture.debugElement.query(By.directive(Link));
		expect(directiveEl).not.toBeNull();
		expect(directiveEl.attributes["aria-disabled"]).toBe(null);
		expect(directiveEl.attributes["tabindex"]).toBe(null);
		expect(directiveEl.attributes["href"]).toBe("https://angular.carbondesignsystem.com/");
	});

	it("should create a disabled link", () => {
		TestBed.configureTestingModule({
			declarations: [TestDisabledLinkComponent, Link]
		});

		let fixture: ComponentFixture<TestDisabledLinkComponent> = TestBed.createComponent(TestDisabledLinkComponent);
		let component: TestDisabledLinkComponent = fixture.componentInstance;
		fixture.detectChanges();

		const directiveEl = fixture.debugElement.query(By.directive(Link));
		expect(directiveEl.attributes["aria-disabled"]).toBe("true");
		expect(directiveEl.attributes["tabindex"]).toBe("-1");
	});
});


