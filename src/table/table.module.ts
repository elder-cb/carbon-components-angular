// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ChevronRight16Module } from "@carbon/icons-angular/lib/chevron--right/16";
import { Search16Module } from "@carbon/icons-angular/lib/search/16";
import { Close16Module } from "@carbon/icons-angular/lib/close/16";

import { NFormsModule } from "./../forms/forms.module";
import { DialogModule } from "./../dialog/dialog.module";
import { I18nModule } from "./../i18n/i18n.module";

import { ButtonModule, SearchModule } from "../";

// components & directives
import { Table } from "./table.component";
import { TableHead } from "./table-head.component";

import { TableContainer } from "./table-container.component";
import { TableHeader } from "./header/table-header.component";
import { TableHeaderTitle } from "./header/table-header-title.directive";
import { TableHeaderDescription } from "./header/table-header-description.directive";

import { TableToolbar } from "./toolbar/table-toolbar.component";
import { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
import { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
import { TableToolbarContent } from "./toolbar/table-toolbar-content.component";

import { DataGridFocus } from "./data-grid-focus.directive";
import { ExpandedRowHover } from "./expanded-row-hover.directive";

// exports
export { Table } from "./table.component";
export { TableHead } from "./table-head.component";

export { TableModel } from "./table-model.class";
export { TableItem } from "./table-item.class";
export { TableHeaderItem } from "./table-header-item.class";

export { TableContainer } from "./table-container.component";
export { TableHeader } from "./header/table-header.component";
export { TableHeaderTitle } from "./header/table-header-title.directive";
export { TableHeaderDescription } from "./header/table-header-description.directive";

export { TableToolbar } from "./toolbar/table-toolbar.component";
export { TableToolbarActions } from "./toolbar/table-toolbar-actions.component";
export { TableToolbarSearch } from "./toolbar/table-toolbar-search.component";
export { TableToolbarContent } from "./toolbar/table-toolbar-content.component";

export { DataGridFocus } from "./data-grid-focus.directive";
export { ExpandedRowHover } from "./expanded-row-hover.directive";

@NgModule({
	declarations: [
		Table,
		TableHead,
		TableToolbar,
		TableContainer,
		TableHeader,
		TableHeaderTitle,
		TableHeaderDescription,
		TableToolbarActions,
		TableToolbarSearch,
		TableToolbarContent,
		DataGridFocus,
		ExpandedRowHover
	],
	exports: [
		Table,
		TableHead,
		TableToolbar,
		TableContainer,
		TableHeader,
		TableHeaderTitle,
		TableHeaderDescription,
		TableToolbarActions,
		TableToolbarSearch,
		TableToolbarContent,
		DataGridFocus,
		ExpandedRowHover
	],
	imports: [
		CommonModule,
		NFormsModule,
		FormsModule,
		DialogModule,
		ButtonModule,
		SearchModule,
		I18nModule,
		ChevronRight16Module,
		Search16Module,
		Close16Module
	]
})
export class TableModule {}
