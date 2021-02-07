const list_items = [
	{
		id: 0,
		category: "first",
		body: "Item 0"
	},
	{
		id: 1,
		category: "second",
		body: "Item 2"
	},
	{
		id: 2,
		category: "second",
		body: "Item 2"
	},
	{
		id: 3,
		category: "first",
		body: "Item 3"
	},
	{
		id: 4,
		category: "second",
		body: "Item 4"
	},
	{
		id: 5,
		category: "first",
		body: "Item 5"
	},
	{
		id: 6,
		category: "first",
		body: "Item 6"
	},
	{
		id: 7,
		category: "first",
		body: "Item 7"
	},
	{
		id: 8,
		category: "second",
		body: "Item 8"
	},
	{
		id: 9,
		category: "second",
		body: "Item 9"
	},
	{
		id: 10,
		category: "first",
		body: "Item 10"
	},
	{
		id: 11,
		category: "first",
		body: "Item 11"
	},
	{
		id: 12,
		category: "first",
		body: "Item 12"
	},
];

let first_items = [];
let second_items = [];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

const allBtn = document.querySelector('.all');
const firstBtn = document.querySelector('.first');
const secondBtn = document.querySelector('.second');

let current_page = 1;
let rows = 4;


function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		
		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item.body;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);

firstBtn.addEventListener('click', function(){
	list_element.innerHTML = '';
	current_page = 1;
	first_items = [];
	list_items.forEach(el => {
		if(el.category == 'first') first_items.push(el);
	});
	DisplayList(first_items, list_element, rows, current_page);
	SetupPagination(first_items, pagination_element, rows);
});
secondBtn.addEventListener('click', function(){
	list_element.innerHTML = '';
	current_page = 1;
	second_items = [];
	list_items.forEach(el => {
		if(el.category == 'second') second_items.push(el);
	});
	DisplayList(second_items, list_element, rows, current_page);
	SetupPagination(second_items, pagination_element, rows);
});
allBtn.addEventListener('click', function(){
	list_element.innerHTML = '';
	current_page = 1;
	first_items = [];
	second_items = [];

	DisplayList(list_items, list_element, rows, current_page);
	SetupPagination(list_items, pagination_element, rows);
});