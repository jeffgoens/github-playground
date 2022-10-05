function createElement(parentEl, tag, text, className, idName, typeName, styleName) {

    let element = document.createElement(tag)                    // creates element based on tag input    Example 'div' creates a div element
    element.innerText = text                                     // Takes value of text and places it in innerText of   the element being created

    if (idName) {                                                // If idName exists
        element.setAttribute('id', idName);                      // Set id attribute of element = idName
    }

    if (className) {                                             // If className exists
        element.setAttribute('class', className);                // Set class attribute of element = className
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


// head text, zip input, button
// initialized on reload
function boardLayout() {


    createElement(mainContainer, 'h1', '', '', '', '', '',)
    createElement(mainContainer, 'div', '', 'card', 'mainCard', '', '',)
    createElement(mainCard, 'div', '', 'row', 'rowOne', '', 'height: 150px',)
    createElement(rowOne, 'div', '', 'col', 'columnOneA', '', '',)
    createElement(columnOneA, 'input', '', 'form-control', '', 'text', 'height: 125px',)
    createElement(rowOne, 'div', '', 'col', 'columnOneB', '', '',)
    createElement(columnOneB, 'input', '', 'form-control', '', 'text', 'height: 125px',)
    createElement(rowOne, 'div', '', 'col', 'columnOneC', '', '',)
    createElement(columnOneC, 'input', '', 'form-control', '', 'text', 'height: 125px',)

}

boardLayout();
