import {
	Directive,
	HostBinding,
	Input,
	OnInit
} from "@angular/core";
import { ButtonSize, ButtonType } from "./button.types";

/**
 * A convenience directive for applying styling to a button.
 *
 * [See demo](../../?path=/story/button--basic)
 *
 * Example:
 *
 * ```html
 * <button ibmButton>A button</button>
 * <button ibmButton="secondary">A secondary button</button>
 * ```
 *
 * See the [vanilla carbon docs](http://www.carbondesignsystem.com/components/button/code) for more detail.
 *
 * <example-url>../../iframe.html?id=button--basic</example-url>
 */
@Directive({
	selector: "[ibmButton]"
})
export class Button implements OnInit {
	/**
	 * sets the button type
	 */
	@Input() ibmButton: ButtonType = "primary";
	/**
	 * Specify the size of the button
	 */
	@Input() size: ButtonSize;
	/**
	 * If assistive text is used, this specifies the placement.
	 * Possible placements are `top`, `bottom`, `left`, `right`.
	 * If assistive text is not used, this can be left undefined.
	 */
	@Input() assistiveTextPlacement: string;
	/**
	 * If assistive text is used, this specifies the alignment.
	 * Possible alignments are `center`, `start`, `end`.
	 * If assistive text is not used, this can be left undefined.
	 */
	@Input() assistiveTextAlignment: string;

	// a whole lot of HostBindings ... this way we don't have to touch the elementRef directly
	@HostBinding("class.bx--btn") get baseClass() {
		return !this.toolbarAction;
	}
	@HostBinding("class.bx--btn--primary") get primaryButton() {
		return this.ibmButton === "primary";
	}
	@HostBinding("class.bx--btn--secondary") get secondaryButton() {
		return this.ibmButton === "secondary";
	}
	@HostBinding("class.bx--btn--tertiary") get tertiaryButton() {
		return this.ibmButton === "tertiary";
	}
	@HostBinding("class.bx--btn--ghost") get ghostButton() {
		return this.ibmButton === "ghost";
	}
	@HostBinding("class.bx--btn--danger") get dangerButton() {
		return this.ibmButton === "danger" || this.ibmButton === "danger--primary";
	}
	@HostBinding("class.bx--skeleton") @Input() skeleton = false;
	@HostBinding("class.bx--btn--sm") get smallSize() {
		return this.size === "sm";
	}
	@HostBinding("class.bx--btn--field") get fieldSize() {
		return this.size === "field";
	}
	@HostBinding("class.bx--toolbar-action") toolbarAction = false;
	@HostBinding("class.bx--overflow-menu") overflowMenu = false;
	@HostBinding("class.bx--btn--icon-only") @Input() iconOnly = false;

	/**
	 * `hasAssistiveText` input specifies whether the button contains assistive text or not.
	 * Assistive text can be utilized as follows:
	 * ```typescript
	 *	<button
	 *		ibmButton="tertiary"
	 *		[iconOnly]="true"
	 *		[hasAssistiveText]="true"
	 *		assistiveTextPlacement="top"
	 *		assistiveTextAlignment="center">
	 *		<svg class="bx--btn__icon" ibmIconCopy size="20"></svg>
	 *		<span class="bx--assistive-text">Icon description</span>
	 *	</button>
	 * ```
	 */
	@HostBinding("class.bx--tooltip__trigger")
	@HostBinding("class.bx--tooltip--a11y") @Input() hasAssistiveText = false;

	@HostBinding("class.bx--tooltip--align-center") get isAssistiveTextCenterAligned() {
		return this.assistiveTextAlignment === "center";
	}

	@HostBinding("class.bx--tooltip--align-start") get isAssistiveTextStartAligned() {
		return this.assistiveTextAlignment === "start";
	}

	@HostBinding("class.bx--tooltip--align-end") get isAssistiveTextEndAligned() {
		return this.assistiveTextAlignment === "end";
	}

	@HostBinding("class.bx--tooltip--top") get isAssistiveTextTopPositioned() {
		return this.assistiveTextPlacement === "top";
	}

	@HostBinding("class.bx--tooltip--bottom") get isAssistiveTextBottomPositioned() {
		return this.assistiveTextPlacement === "bottom";
	}

	@HostBinding("class.bx--tooltip--left") get isAssistiveTextLeftPositioned() {
		return this.assistiveTextPlacement === "left";
	}

	@HostBinding("class.bx--tooltip--right") get isAssistiveTextRightPositioned() {
		return this.assistiveTextPlacement === "right";
	}

	ngOnInit() {
		if (!this.ibmButton) {
			this.ibmButton = "primary";
		}
	}
}
