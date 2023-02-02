/**
 * Todo Class. 5가지 property를 가진다.
 * @constructor
 * @property {number} id
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {string[]} [tag]
 */
function Todo() {}

/**
 * Todo를 생성한다.
 * 내용없이 추가할 수 있다.
 * @return {Todo}
 */
function createTodo() {}

/**
 *모든 Todo를 조회할 수 있다.
 * @param {number} [id] - Todo id로 특정 Todo 조회 가능
 */
function readTodo(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다
 * @param {number} [id] - 특정 할 일의 특정 태그 수정 가능
 */
function updateTodo(id) {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 삭제할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} [id]
 */
function deleteTodo(id) {}

/**
 * 필요한 Items
 * @constructor
 * @property {Todo[]} todoList
 */
function Item() {}
