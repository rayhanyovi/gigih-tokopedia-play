import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const CommentForm = ({ videoId }) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (values) => {
    try {
      const { username, comment } = values;

      const response = await fetch("http://localhost:3004/submit-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          comment,
          videoId, // Pass the videoId to the server
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setLoading(false);
        window.location.reload();
      } else {
        setError("An error occurred while submitting the comment.");
        setLoading(false);
      }
    } catch (error) {
      setError("An error occurred while submitting the comment.");
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      style={{
        width: 400,
      }}
      onFinish={handleSubmit}>
      <h3>Add a Comment</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Comment submitted successfully!</p>
      )}

      <Form.Item name="username">
        <Input placeholder="Tell us your name!" />
      </Form.Item>
      <Form.Item name="comment">
        <TextArea rows={4} placeholder="Write your comment here!" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-color-green text-color-white"
          style={{ fontWeight: "bold" }}>
          Submit Comment
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
