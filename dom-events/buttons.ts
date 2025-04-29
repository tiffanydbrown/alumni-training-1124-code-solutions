const $clickButton = document.querySelector('.click-button');

if (!$clickButton) throw new Error('click-button does not exist');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$clickButton.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');

if (!$hoverButton) throw new Error('hover-button does not exist');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

$hoverButton.addEventListener('mouseover', handleMouseover);

const $doubleClickButton = document.querySelector('.double-click-button');

if (!$doubleClickButton) throw new Error('double-click-button does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
