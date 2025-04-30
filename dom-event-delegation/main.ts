const $task = document.querySelector('.task-list');
if (!$task) throw new Error('There was no click event');

// const $taskList = document.querySelector('.task-list');

$task.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log('event target', eventTarget);
  console.log(eventTarget.tagName);

  const taskList = eventTarget.closest('.task-list-item');
  console.log('Task List', taskList);
  const remove = taskList?.remove();
  console.log(remove);
});
