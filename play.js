function createElement(parentEl, tag, text, className, idName, cellIndexName) {

    let element = document.createElement(tag)                    // creates element based on tag input    Example 'div' creates a div element
    element.innerText = text                                     // Takes value of text and places it in innerText of   the element being created

    if (className) {                                             // If className exists
        element.setAttribute('class', className);                // Set class attribute of element = className
    }

    if (idName) {                                                // If idName exists
        element.setAttribute('id', idName);                      // Set id attribute of element = idName
    }

    if (cellIndexName) {
        element.setAttribute('cellIndex', cellIndexName);
    }


    parentEl.appendChild(element)                                 // parentEl = parent element    places the element being created inside parentEl
}

const mainContainer = document.getElementById('gameContainer')            // Main game container div



function boardLayout() {

    createElement(mainContainer, 'h1', 'Tic Tac Toe', '', '', '',);
    createElement(mainContainer, 'div', '', 'card', 'mainCard', '',);
    createElement(mainCard, 'div', '', '', 'boardContainer', '',)
    createElement(boardContainer, 'div', '', 'cell', '', '0',);
    createElement(boardContainer, 'div', '', 'cell', '', '1',);
    createElement(boardContainer, 'div', '', 'cell', '', '2',);
    createElement(boardContainer, 'div', '', 'cell', '', '3',);
    createElement(boardContainer, 'div', '', 'cell', '', '4',);
    createElement(boardContainer, 'div', '', 'cell', '', '5',);
    createElement(boardContainer, 'div', '', 'cell', '', '6',);
    createElement(boardContainer, 'div', '', 'cell', '', '7',);
    createElement(boardContainer, 'div', '', 'cell', '', '8',);

}

boardLayout();