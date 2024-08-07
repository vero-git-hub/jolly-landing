document.addEventListener('DOMContentLoaded', function() {
    var customSelects = document.getElementsByClassName('custom-select');
    for (var i = 0; i < customSelects.length; i++) {
        var selElmnt = customSelects[i].getElementsByTagName('select')[0];
        var selectedDiv = document.createElement('DIV');
        selectedDiv.setAttribute('class', 'select-selected');
        selectedDiv.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        customSelects[i].appendChild(selectedDiv);

        var itemsDiv = document.createElement('DIV');
        itemsDiv.setAttribute('class', 'select-items select-hide');
        for (var j = 1; j < selElmnt.length; j++) {
            var itemDiv = document.createElement('DIV');
            itemDiv.innerHTML = selElmnt.options[j].innerHTML;
            itemDiv.addEventListener('click', function(e) {
                var select = this.parentNode.parentNode.getElementsByTagName('select')[0];
                var selected = this.parentNode.previousSibling;
                for (var i = 0; i < select.length; i++) {
                    if (select.options[i].innerHTML == this.innerHTML) {
                        select.selectedIndex = i;
                        selected.innerHTML = this.innerHTML;
                        var sameAsSelected = this.parentNode.getElementsByClassName('same-as-selected');
                        for (var k = 0; k < sameAsSelected.length; k++) {
                            sameAsSelected[k].removeAttribute('class');
                        }
                        this.setAttribute('class', 'same-as-selected');
                        break;
                    }
                }
                selected.click();
            });
            itemsDiv.appendChild(itemDiv);
        }
        customSelects[i].appendChild(itemsDiv);

        selectedDiv.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle('select-hide');
            this.classList.toggle('select-arrow-active');
        });
    }

    function closeAllSelect(elmnt) {
        var items = document.getElementsByClassName('select-items');
        var selected = document.getElementsByClassName('select-selected');
        for (var i = 0; i < selected.length; i++) {
            if (elmnt == selected[i]) {
                continue;
            }
            selected[i].classList.remove('select-arrow-active');
        }
        for (var i = 0; i < items.length; i++) {
            items[i].classList.add('select-hide');
        }
    }

    document.addEventListener('click', closeAllSelect);
});
