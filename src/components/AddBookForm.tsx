import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { addBook, IBook } from "../store/bookSlice";
import { useAppDispatch } from "../hooks";

type FieldType = {
  bookTitle?: string;
  author?: string;
};

const AddBookForm = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    let id: string = new Date().toISOString();
    const book: IBook = {
      id: id,
      volumeInfo: {
        title: values.bookTitle,
      },
    };

    dispatch(addBook(book));
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Book title"
        name="bookTitle"
        rules={[
          {
            required: true,
            message: "Please input book title!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Author"
        name="author"
        rules={[
          {
            required: true,
            message: "Please input author!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddBookForm;
