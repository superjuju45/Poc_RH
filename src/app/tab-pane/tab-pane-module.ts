import { NgModule } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { MatTab } from '@angular/material/tabs';
import { MatSelectionList} from '@angular/material/list';
import { MatSidenavContainer  } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatActionList } from '@angular/material/list';
import { MatNavList } from '@angular/material/list';

@NgModule({
    imports: [
        MatTabGroup,
        MatTab,
        MatSelectionList,
        MatSidenavContainer,
        MatSidenavModule,
        MatActionList,
        MatNavList
    ],
    exports: [
        MatTabGroup,
        MatTab,
        MatSelectionList,
        MatSidenavContainer,
        MatSidenavModule,
        MatActionList,
        MatNavList
    ]
})
export class TabPaneModule {}