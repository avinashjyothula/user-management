import React, { useState } from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPencil } from "react-icons/bi";
import { defaultEducationEntry } from "../data/mockUsers";

const EducationSkillsForm = ({ data, setData }) => {
  const [isEducationEditable, setIsEducationEditable] = useState(true);
  const [isSkillsEditable, setIsSkillsEditable] = useState(true);

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = data.education.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [...prev.education, { ...defaultEducationEntry }],
    }));
  };

  const removeEducation = (index) => {
    const updatedEducation = data.education.filter((_, i) => i !== index);
    setData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    setData((prev) => ({ ...prev, skills: skillsArray }));
  };

  const handleProjectsChange = (e) => {
    const projectsArray = e.target.value
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
    setData((prev) => ({ ...prev, projects: projectsArray }));
  };

  return (
    <Card className="p-4 border-0">
      <Row className="mb-4 align-items-center">
        <Col>
          <h5 className="mb-0 fw-semibold">Education Details</h5>
        </Col>
        <Col xs="auto">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle"
            onClick={() => setIsEducationEditable(!isEducationEditable)}
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#E8E0FF",
              cursor: "pointer",
              transition: "0.2s",
            }}
            title="Edit Education"
          >
            <BiPencil
              size={18}
              color={isEducationEditable ? "#6B4EFF" : "#666"}
            />
          </div>
        </Col>
      </Row>

      <Form>
        {data.education &&
          data.education.map((edu, index) => (
            <Card
              key={index}
              className="mb-4 p-3 position-relative"
              style={{
                background: "#F9F9FD",
                borderRadius: "12px",
              }}
            >
              <Button
                variant="link"
                className="text-danger position-absolute top-0 end-0 me-2 mt-2"
                onClick={() => removeEducation(index)}
                aria-label="Remove education entry"
              >
                <RiDeleteBin6Line size={18} />
              </Button>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>School / College</Form.Label>
                  <Form.Control
                    name="college"
                    placeholder="e.g. Lincoln College"
                    value={edu.college}
                    onChange={(e) => handleEducationChange(index, e)}
                    disabled={!isEducationEditable}
                    style={{
                      background: isEducationEditable ? "#fff" : "#f0f0f0",
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Highest degree or equivalent</Form.Label>
                  <Form.Control
                    name="degree"
                    placeholder="e.g. Bachelors in Technology"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, e)}
                    disabled={!isEducationEditable}
                    style={{
                      background: isEducationEditable ? "#fff" : "#f0f0f0",
                    }}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    name="course"
                    placeholder="e.g. Computer science engineering"
                    value={edu.course}
                    onChange={(e) => handleEducationChange(index, e)}
                    disabled={!isEducationEditable}
                    style={{
                      background: isEducationEditable ? "#fff" : "#f0f0f0",
                    }}
                  />
                </Col>
                <Col md={3}>
                  <Form.Label>Year of completion</Form.Label>
                  <Form.Control
                    name="year"
                    placeholder="YYYY"
                    value={edu.year}
                    onChange={(e) => handleEducationChange(index, e)}
                    disabled={!isEducationEditable}
                    style={{
                      background: isEducationEditable ? "#fff" : "#f0f0f0",
                    }}
                  />
                </Col>
                <Col md={3}>
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    name="grade"
                    placeholder="Enter here"
                    value={edu.grade}
                    onChange={(e) => handleEducationChange(index, e)}
                    disabled={!isEducationEditable}
                    style={{
                      background: isEducationEditable ? "#fff" : "#f0f0f0",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          ))}

        <Button
          onClick={addEducation}
          className="mb-5"
          style={{
            backgroundColor: "#E8E0FF",
            border: "none",
            color: "#6B4EFF",
            fontWeight: 600,
            borderRadius: "8px",
            padding: "8px 18px",
          }}
        >
          + Add Education
        </Button>

        <Row className="mb-4 align-items-center mt-4">
          <Col>
            <h5 className="mb-0 fw-semibold">Skills & Projects</h5>
          </Col>
          <Col xs="auto">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle"
              onClick={() => setIsSkillsEditable(!isSkillsEditable)}
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#E8E0FF",
                cursor: "pointer",
                transition: "0.2s",
              }}
              title="Edit Skills & Projects"
            >
              <BiPencil
                size={18}
                color={isSkillsEditable ? "#6B4EFF" : "#666"}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Label>Skills (Comma Separated)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter here (e.g., React, Node.js, Bootstrap)"
              value={data.skills?.join(", ")}
              onChange={handleSkillsChange}
              disabled={!isSkillsEditable}
              style={{
                background: isSkillsEditable ? "#fff" : "#f0f0f0",
              }}
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label>Projects (Comma Separated)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter here"
              value={data.projects?.join(", ")}
              onChange={handleProjectsChange}
              disabled={!isSkillsEditable}
              style={{
                background: isSkillsEditable ? "#fff" : "#f0f0f0",
              }}
            />
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default EducationSkillsForm;
