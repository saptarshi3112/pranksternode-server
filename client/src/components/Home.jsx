import React, {
	Component,
	Fragment
} from 'react';
import { connect  } from 'react-redux';

import {
	callUser
} from '../actions/callAction';

import {
	Card,
	Row,
	Col,
	Container,
	Form,
	Button
} from 'react-bootstrap';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			number: '',
			repeater: ''
		};

		this.onChange = this.onChange.bind(this);
		this.callUser = this.callUser.bind(this);

	}

	onChange(e) {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	callUser(e) {
		console.log(this.state);
		e.preventDefault();
		this.props.callUser(this.state.number, this.state.repeater);
	}

	render() {
		return (
			<Fragment>
				<Container>
					<Row className="justify-content-center">
						<Col lg={6}>
							<Card>
								<Card.Body>
									<Form>
										<Form.Group>
											<Form.Label>Mobile</Form.Label>
											<Form.Control name="number" onChange={this.onChange} />
										</Form.Group>
										<Form.Group controlId="exampleForm.ControlSelect1">
									    <Form.Label>Repeater</Form.Label>
									    <Form.Control name="repeater" onChange={this.onChange} as="select">
									      <option>1</option>
												<option>2</option>
												<option>5</option>
									      <option>10</option>
									      <option>20</option>
									      <option>50</option>
									      <option>100</option>
									    </Form.Control>
									  </Form.Group>
										<Form.Group>
											<Button onClick={this.callUser} size="sm" variant="dark">Call</Button>
										</Form.Group>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Fragment>
		);
	}

}


const mapStateToProps = state => ({
	call: state.call
});


export default connect(mapStateToProps, {
	callUser
})(Home);
