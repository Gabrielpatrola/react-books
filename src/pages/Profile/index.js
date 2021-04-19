import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const Profile = () => {
  return (
    <Container className="mt-5">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">About me</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Profile image</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  )
};

export default Profile;