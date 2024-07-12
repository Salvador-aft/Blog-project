import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageUpload from './Components/Image/image-selector';
import RichTextEditor from './Components/Lead/lead';

function UploadForm() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (imageFile) => {
        setSelectedImage(imageFile);
    };

    return (
        <div style={{ backgroundColor: '#d1f3ff', minHeight: '100vh' }}>
            <Container fluid>
                <Row className="align-items-center pt-5">
                    <Col><h1>Upload Form</h1></Col>
                </Row>
                <Row className="mt-5">
                    <Col className="col-6">
                        <h3>Title</h3>
                        <h6 className='py-1'>Create an eye-catching title for your news</h6>
                        <input type="text" className="form-control" placeholder="Enter title" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="col-9">
                        <RichTextEditor />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className="col-6">
                        <ImageUpload onImageChange={handleImageChange} />
                        {selectedImage && (
                            <div className='pt-3'>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Preview"
                                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                                />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UploadForm;