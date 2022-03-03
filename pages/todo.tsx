import React from 'react'
import TodoEntry from "../components/todo/TodoEntry";
import Table from "../components/Table";

export default function TodoPage() {
  return (
    <React.Fragment>
      <Table columns={["Id", "Task", "Author"]} actions={["Finish", "Delete"]}>
        <TodoEntry id={4543} author={"Qetz"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam asperiores consectetur corporis dolor earum inventore laboriosam mollitia numquam, officia sapiente sint? Ab ad alias commodi debitis dicta dolore, doloribus eligendi eveniet ex explicabo fuga itaque mollitia nemo nostrum perferendis, porro possimus praesentium quae quasi, sint? Architecto dignissimos doloremque excepturi quos totam. A accusantium aliquid aperiam architecto assumenda dolor doloremque, ea eligendi facere harum id illo itaque magnam nihil nobis nostrum odio odit perspiciatis quaerat quisquam rerum similique soluta sunt velit voluptate. Aliquid blanditiis dolorum ducimus ea eos esse excepturi explicabo harum incidunt libero maiores, perferendis quod reprehenderit vitae.
        </TodoEntry>
        <TodoEntry id={7664} author={"Qetz"} striped>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam asperiores consectetur corporis dolor earum inventore laboriosam mollitia numquam, officia sapiente sint? Ab ad alias commodi debitis dicta dolore, doloribus eligendi eveniet ex explicabo fuga itaque mollitia nemo nostrum perferendis, porro possimus praesentium quae quasi, sint? Architecto dignissimos doloremque excepturi quos totam. A accusantium aliquid aperiam architecto assumenda dolor doloremque, ea eligendi facere harum id illo itaque magnam nihil nobis nostrum odio odit perspiciatis quaerat quisquam rerum similique soluta sunt velit voluptate. Aliquid blanditiis dolorum ducimus ea eos esse excepturi explicabo harum incidunt libero maiores, perferendis quod reprehenderit vitae.
        </TodoEntry>
        <TodoEntry id={9486} author={"Qetz"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam asperiores consectetur corporis dolor earum inventore laboriosam mollitia numquam, officia sapiente sint? Ab ad alias commodi debitis dicta dolore, doloribus eligendi eveniet ex explicabo fuga itaque mollitia nemo nostrum perferendis, porro possimus praesentium quae quasi, sint? Architecto dignissimos doloremque excepturi quos totam. A accusantium aliquid aperiam architecto assumenda dolor doloremque, ea eligendi facere harum id illo itaque magnam nihil nobis nostrum odio odit perspiciatis quaerat quisquam rerum similique soluta sunt velit voluptate. Aliquid blanditiis dolorum ducimus ea eos esse excepturi explicabo harum incidunt libero maiores, perferendis quod reprehenderit vitae.
        </TodoEntry>
      </Table>
    </React.Fragment>
  )
}
