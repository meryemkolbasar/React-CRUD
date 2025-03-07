import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/userSlice';

const AddUserModal = ({ show, onHide }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: ''
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(addUser(formData)).unwrap();
            onHide();
            setFormData({
                name: '',
                username: '',
                email: '',
                phone: '',
                website: '',
                address: {
                    street: '',
                    suite: '',
                    city: '',
                    zipcode: ''
                },
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: ''
                }
            });
        } catch (error) {
            console.error('Kullanıcı eklenirken hata oluştu:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Yeni Kullanıcı Ekle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <h5 className="mb-3">Kişisel Bilgiler</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Ad Soyad</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Ad Soyad giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Kullanıcı Adı</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    placeholder="Kullanıcı adı giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email adresinizi giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Telefon</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Telefon numaranızı giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Website</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="Website adresinizi giriniz"
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <h5 className="mb-3">Adres Bilgileri</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Sokak</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address.street"
                                    value={formData.address.street}
                                    onChange={handleChange}
                                    placeholder="Sokak adını giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Apartman/Daire</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address.suite"
                                    value={formData.address.suite}
                                    onChange={handleChange}
                                    placeholder="Apartman/Daire bilgisini giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Şehir</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address.city"
                                    value={formData.address.city}
                                    onChange={handleChange}
                                    placeholder="Şehir adını giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Posta Kodu</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address.zipcode"
                                    value={formData.address.zipcode}
                                    onChange={handleChange}
                                    placeholder="Posta kodunu giriniz"
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        <Col>
                            <h5 className="mb-3">Şirket Bilgileri</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Şirket Adı</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="company.name"
                                    value={formData.company.name}
                                    onChange={handleChange}
                                    placeholder="Şirket adını giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Slogan</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="company.catchPhrase"
                                    value={formData.company.catchPhrase}
                                    onChange={handleChange}
                                    placeholder="Şirket sloganını giriniz"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>İş Alanı</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="company.bs"
                                    value={formData.company.bs}
                                    onChange={handleChange}
                                    placeholder="İş alanını giriniz"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        İptal
                    </Button>
                    <Button variant="primary" type="submit">
                        Kaydet
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddUserModal; 