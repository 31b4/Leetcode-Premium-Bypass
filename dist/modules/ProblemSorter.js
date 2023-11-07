


class Sorter{ 
    getValue(list, index){ 
        return list[index]
    }

    doSwap(left, right) { 
        return left > right
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    partition(arr, low, high, reverse) {
        let pivot = this.getValue(arr, high);
        let i = (low - 1);

        for (let j = low; j <= high - 1; j++) {
            let low = this.getValue(arr, j)
            let swap = this.doSwap(low, pivot)
            if(reverse) { 
                swap = !swap
            }
            if (swap) {
                i++;
                this.swap(arr, i, j);
            }
        }
        this.swap(arr, i + 1, high);
        return (i + 1);
    }


    sort(arr, reverse = false){ 
        this.quickSort(arr, 0, arr.length-1, reverse)
    }

    quickSort(arr, low, high, reverse) {
        if(high == undefined && low == undefined) { 
            high = arr.length -1; 
            low = 0
        }
        if (low < high) {
            let pi = this.partition(arr, low, high, reverse);
            this.quickSort(arr, low, pi - 1, reverse);
            this.quickSort(arr, pi + 1, high, reverse);
        }
    }
}

class AcceptanceSorter extends Sorter { 
    getValue(list, index){ 
        return list[index].acceptance
    }
}

class DifficultySorter extends Sorter{ 
    getValue(list, index){ 
        return list[index].difficulty
    }

    doSwap(left, right) {
        let difficulties = ["Easy", "Medium", "Hard"]
        return difficulties.indexOf(left) < difficulties.indexOf(right)
    }

}

class IDSorter extends Sorter { 
    getValue(list, index){ 
        return parseInt(list[index].id)
    }
}

class NameSorter extends Sorter { 
    getValue(list, index){ 
        return list[index].problemName
    }
    
    doSwap(left, right) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
        let firstWordLeft = left[0].toLowerCase()
        let firstWordRight = right[0].toLowerCase()
        return alphabet.indexOf(firstWordLeft) < alphabet.indexOf(firstWordRight)
    }
}

class FrequencySorter extends Sorter { 
    getValue(list, index){ 
        return list[index].frequency
    }
}


export {AcceptanceSorter, DifficultySorter, NameSorter, IDSorter, FrequencySorter}

