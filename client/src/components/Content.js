import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import {
  Button,
  Card,
  Spinner,
  Container,
  Row,
  Col,
  InputGroup,
  SplitButton,
  Dropdown,
  Form,
} from "react-bootstrap";

const Content = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [targetFind, setTargetFind] = useState("author");

  const { data, setData, fetchCallback, dataName, noData } = props;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCallback(targetFind, inputValue);
  };

  const handleSort = () => {
    setData([...data.sort((a, b) => a.title.localeCompare(b.title))]);
  };

  const csvData = data.length
    ? data.map((d) => ({
        ...d,
        authors: `${d.authors.firstname} ${d.authors.lastname}`,
      }))
    : [];
  const csvHeader = data.length
    ? Object.keys(data[0]).map((d) => ({
        label: d[0].toUpperCase() + d.slice(1),
        key: d,
      }))
    : [];

  const csvLink = {
    filename: `${dataName}.csv`,
    headers: csvHeader,
    data: csvData,
  };

  const renderContent = !(data.length || noData) ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : noData ? (
    <div>No Data Found</div>
  ) : (
    <div className="books-item">
      {data.map((d, i) => (
        <Card key={i}>
          <Card.Body>
            <Card.Title>{d.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Author : {d.authors.firstname} {d.authors.lastname}
            </Card.Subtitle>
            <Card.Text>ISBN : {d.isbn}</Card.Text>
            <Card.Text>{d.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );

  return (
    <Container>
      <InputGroup className="mb-3">
        <SplitButton
          variant="outline-secondary"
          title={targetFind === "author" ? "Author" : "ISBN"}
          id="segmented-button-dropdown-1"
        >
          <Dropdown.Item
            onClick={() => {
              setTargetFind("author");
              setInputValue("");
            }}
          >
            Author
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setTargetFind("isbn");
              setInputValue("");
            }}
          >
            ISBN
          </Dropdown.Item>
        </SplitButton>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            aria-label="Text input with dropdown button"
            placeholder={
              targetFind === "author"
                ? "Find by Author's Email"
                : "Find by ISBN"
            }
            name="inputValue"
            onChange={handleChange}
            value={inputValue}
          />
          <Button type="submit">Find</Button>
        </Form>
        <Button variant="info" onClick={handleSort}>
          sort
        </Button>
      </InputGroup>

      <CSVLink {...csvLink}>Download as CSV</CSVLink>
      <div>{renderContent}</div>
    </Container>
  );
};

export default Content;
