function createElement(parentEl, tag, text, className, idName, typeName, styleName) {

    let element = document.createElement(tag)                    // creates element based on tag input    Example 'div' creates a div element
    element.innerText = text                                     // Takes value of text and places it in innerText of   the element being created

    if (className) {                                             // If className exists
        element.setAttribute('class', className);                // Set class attribute of element = className
    }

    if (idName) {                                                // If idName exists
        element.setAttribute('id', idName);                      // Set id attribute of element = idName
    }

    if (typeName) {
        element.setAttribute('type', typeName);
    }

    if (styleName) {
        element.setAttribute('style', styleName);
    }


    parentEl.appendChild(element)                                 // parentEl = parent element    places the element being created inside parentEl
}

const mainContainer = document.getElementById('main')            // Main container div



function boardLayout() {

    createElement(mainContainer, 'h1', 'Name goes here', '', '', '', '',);
    createElement(mainContainer, 'div', '', 'card', 'mainCard', '', '',);
    createElement(mainCard, 'div', '', 'row', 'rowOne', '', 'height: 150px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneA', '', '',);
    createElement(columnOneA, 'input', '', 'form-control', '', 'text', 'height: 125px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneB', '', '',);
    createElement(columnOneB, 'input', '', 'form-control', '', 'text', 'height: 125px',);
    createElement(rowOne, 'div', '', 'col', 'columnOneC', '', '',);
    createElement(columnOneC, 'input', '', 'form-control', '', 'text', 'height: 125px',);

    createElement(mainCard, 'div', '', 'row', 'rowTwo', '', 'height: 150px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoA', '', '',);
    createElement(columnTwoA, 'input', '', 'form-control', '', 'text', 'height: 125px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoB', '', '',);
    createElement(columnTwoB, 'input', '', 'form-control', '', 'text', 'height: 125px',);
    createElement(rowTwo, 'div', '', 'col', 'columnTwoC', '', '',);
    createElement(columnTwoC, 'input', '', 'form-control', '', 'text', 'height: 125px',);

    createElement(mainCard, 'div', '', 'row', 'rowThree', '', 'height: 150px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeA', '', '',);
    createElement(columnThreeA, 'input', '', 'form-control', '', 'text', 'height: 125px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeB', '', '',);
    createElement(columnThreeB, 'input', '', 'form-control', '', 'text', 'height: 125px',);
    createElement(rowThree, 'div', '', 'col', 'columnThreeC', '', '',);
    createElement(columnThreeC, 'input', '', 'form-control', '', 'text', 'height: 125px',);


}

boardLayout();
