import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {

    transform(value: Array<any>, search: String, searchKey: string) {

        if (!value) {
            return;
        }
        if (value.length === 0) {
            return value;
        }
        let resultArray = [];

        search = search.toUpperCase();
        resultArray = value.filter((obj) => {
            return obj[searchKey].toUpperCase().match('^.*' + search + '.*$', 'i');
        });

        return resultArray;
    }
}
