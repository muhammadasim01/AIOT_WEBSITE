import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

const AddBlog = () => {
  const router = useRouter();
  const [Photo, setphoto] = useState("");
  const [state, setstate] = useState({
    blogTitle: "",
    blogContent: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) router.push("/admin/login");
  }, []);
  const inputHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const inputPhoto = (e) => {
    setphoto(e.target.files[0]);
  };
  const addData = (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("Photo", Photo);
    body.append("blogTitle", state.blogTitle);
    body.append("blogContent", state.blogContent);
    body.append("isFeatured", isChecked);
    axios
      .post("/api/add", body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setstate({
      blogTitle: "",
      blogContent: "",
    });
  };

  return (
    <>
      <h2 className="display-3">Add Blogs</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Blog Title*</Form.Label>
          <Form.Control
            placeholder="title...."
            name="blogTitle"
            value={state.blogTitle}
            onChange={inputHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Blog Content*</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            placeholder="content.."
            name="blogContent"
            value={state.blogContent}
            onChange={inputHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicFile" className="mb-3">
          <Form.Label>Add Image</Form.Label>
          <Form.Control
            type="file"
            size="sm"
            name="Photo"
            onChange={inputPhoto}
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id={`default-checkbox`}
          label={`mark as featured`}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        />

        <Button variant="primary" type="submit" onClick={addData}>
          Add
        </Button>
      </Form>
    </>
  );
};

export default AddBlog;
