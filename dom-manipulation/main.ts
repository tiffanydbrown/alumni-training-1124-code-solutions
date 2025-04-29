const $hotButton = document.querySelector('.hot-button');
if (!$hotButton) throw new Error('The hot-button query failed.');

const $clickCount = document.querySelector('.click-count');

let clicks: number = 0;

function handleClick(): void {
  clicks = clicks + 1;

  if (!$hotButton || !$clickCount) {
    throw new Error('The hot-button or click-count query failed.');
  }

  $clickCount.textContent = `Clicks: ${clicks}`;

  if (clicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', handleClick);
