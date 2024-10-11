import { useEffect } from "react";
import { fetchBooks } from "../store/bookSlice";
import { List } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks";

const BookList = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.myBooks);
  const renderList = books?.map((item) => (
    <a href={item.volumeInfo?.previewLink}>{item.volumeInfo.title}</a>
  ));

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <List
      size="large"
      bordered
      dataSource={renderList}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

export default BookList;
