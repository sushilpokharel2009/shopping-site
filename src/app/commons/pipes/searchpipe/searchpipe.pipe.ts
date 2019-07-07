import {Pipe} from '@angular/core';

@Pipe({
    name: "search"
})
export class SearchPipe{
    transform(value, arg){
        function checkForValue(values, args){
            for (var key in values) {
                if (typeof (values[key]) === "object") {
                    return checkForValue(values[key], args);
                } else if (JSON.stringify(values[key]).indexOf(args)>-1) {
                    return values;
                }
            }
            return false;
        }
        return value.filter((item)=>{
            if (typeof(item) === 'string' || typeof(item) === 'number'){
                if (item.toString().indexOf(arg)>-1){
                    return item;
                }
            }else{
                if (arg !== "") {
                    return checkForValue(item, arg);
                } else {
                    return item;
                }
            }
        });
    }
}