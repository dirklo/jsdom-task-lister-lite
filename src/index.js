document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector('#tasks');
  const form = document.querySelector('#create-task-form');
  const text_field = document.querySelector('#new-task-description');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const new_li = document.createElement('li');
    new_li.innerText = text_field.value;
    list.append(new_li);
    text_field.value = "";
    e.target.reset();
  });
});
