import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/users/userSlice';

const EditUserModal = ({ show, onHide, userId }) => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
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

    useEffect(() => {
        if (userId) {
            const user = users.find(u => u.id === userId);
            if (user) {
                setFormData(user);
            }
        }
    }, [userId, users]);

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
        await dispatch(updateUser({ ...formData, id: userId }));
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Kullanıcı Düzenle</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <h5>Kişisel Bilgiler</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Ad Soyad</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
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
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <h5 className="mt-4">Adres Bilgileri</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Sokak</Form.Label>
                        <Form.Control
                            type="text"
                            name="address.street"
                            value={formData.address.street}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apartman</Form.Label>
                        <Form.Control
                            type="text"
                            name="address.suite"
                            value={formData.address.suite}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Şehir</Form.Label>
                        <Form.Control
                            type="text"
                            name="address.city"
                            value={formData.address.city}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Posta Kodu</Form.Label>
                        <Form.Control
                            type="text"
                            name="address.zipcode"
                            value={formData.address.zipcode}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <h5 className="mt-4">Şirket Bilgileri</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Şirket Adı</Form.Label>
                        <Form.Control
                            type="text"
                            name="company.name"
                            value={formData.company.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Slogan</Form.Label>
                        <Form.Control
                            type="text"
                            name="company.catchPhrase"
                            value={formData.company.catchPhrase}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>İş Alanı</Form.Label>
                        <Form.Control
                            type="text"
                            name="company.bs"
                            value={formData.company.bs}
                            onChange={handleChange}
                        />
                    </Form.Group>
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

export default EditUserModal; 