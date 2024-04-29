import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    degreeProgramme: '',
    universityDegree: '',
    yearOfGraduation: '',
    organization: '',
    position: '',
    roleInFdibaAlumni: [''],
  });

  const degreeProgrammes = [
    { label: 'Informatik (B. Sc.)', value: 'Informatik (B. Sc.)' },
    { label: 'Mechatronik und Informationstechnik (B. Sc.)', value: 'Mechatronik und Informationstechnik (B. Sc.)' },
    { label: 'Wirtschaftsinformatik (B. Sc.)', value: 'Wirtschaftsinformatik (B. Sc.)' },
    { label: 'Industrielles Managment (M.A.)', value: 'Industrielles Managment (M.A.)' },
    { label: 'Informatik (M. Sc.)', value: 'Informatik (M. Sc.)' },
    { label: 'Internationales Management (MBA)', value: 'Internationales Management (MBA)' },
  ];

  const universityDegrees = [
    { label: 'Bachelor', value: 'Bachelor' },
    { label: 'Master', value: 'Master' },
  ];

  const rolesInFdibaAlumni = [
    { label: 'Mitglied des Alumni-Vereins werden', value: 'Mitglied des Alumni-Vereins werden' },
    { label: 'Am Management und an der Organisation beteiligen', value: 'Am Management und an der Organisation beteiligen' },
    { label: 'Nur ein paar Ideen und Vorschläge geben', value: 'Nur ein paar Ideen und Vorschläge geben' },
    { label: 'Nur mit Kontakten helfen', value: 'Nur mit Kontakten helfen' },
    { label: 'Nur mit Geld/Sachmitteln helfen', value: 'Nur mit Geld/Sachmitteln helfen' },
    { label: 'Praktikanten brauchen', value: 'Praktikanten brauchen' },
    { label: 'Mitarbeiter brauchen', value: 'Mitarbeiter brauchen' },
    { label: 'Am Lernprozess teilnehmen', value: 'Am Lernprozess teilnehmen' },
    { label: 'FDIBA präsentieren', value: 'FDIBA präsentieren' },
    { label: 'Meine Organisation/Unternehmen präsentieren', value: 'Meine Organisation/Unternehmen präsentieren' },
  ];

  const handleChangeInput = (fieldName) => (e) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleChangeDropdown = (fieldName, selectedOptions) => {
    const values = Array.isArray(selectedOptions) ? selectedOptions.map(option => option.value) : selectedOptions.value;
    setFormData({ ...formData, [fieldName]: values });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/path/to/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response from the backend as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='formContainer'>
        <h1>Willkommen zu FDIBA Alumni</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChangeInput('name')} />
          </label>
          <label>
            E-Mail:
            <input type="email" name="email" value={formData.email} onChange={handleChangeInput('email')} />
          </label>
          <label>
            Telefon:
            <input type="text" name="phone" value={formData.phone} onChange={handleChangeInput('phone')} />
          </label>
          <label>
            LinkedIn:
            <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChangeInput('linkedin')} />
          </label>
          <label>
            Abschluss:
            <Dropdown
              name="degreeProgramme"
              value={formData.degreeProgramme}
              options={degreeProgrammes}
              onChange={(e) => handleChangeDropdown('degreeProgramme', e)} />
          </label>
          <label>
            Studiengang:
            <Dropdown
              name="universityDegree"
              value={formData.universityDegree}
              options={universityDegrees}
              onChange={(e) => handleChangeDropdown('universityDegree', e)} />
          </label>
          <label>
            Abschlussjahr:
            <input type="text" name="yearOfGraduation" value={formData.yearOfGraduation} onChange={handleChangeInput('yearOfGraduation')} />
          </label>
          <label>
            Organisation/Unternehmen:
            <input type="text" name="organization" value={formData.organization} onChange={handleChangeInput('organization')} />
          </label>
          <label>
            Position:
            <input type="text" name="position" value={formData.position} onChange={handleChangeInput('position')} />
          </label>
          <label>
            Welche Rolle wollen Sie in FDIBA Alumni nehmen?
            <MultiSelect
              name="roleInFdibaAlumni"
              value={formData.roleInFdibaAlumni}
              options={rolesInFdibaAlumni}
              onChange={(e) => handleChangeDropdown('roleInFdibaAlumni', e)}
              multiple />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
