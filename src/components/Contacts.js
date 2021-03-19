import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import emailjs from 'emailjs-com';
import {withStyles} from "@material-ui/core";

export default function ContactUs() {
	const useStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',

		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(3),
			color: 'white',
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
			padding: theme.spacing(2),
			background: 'red',
		},
	}));

	const CssTextField = withStyles({
		root: {
			"& label.Mui-focused": {
				color: "#ff1800"
			},
			"& .MuiOutlinedInput-root": {
				"&:hover fieldset": {
					borderColor: "#000"
				},
				"&.Mui-focused fieldset": {
					borderColor: "#ff1800"
				}
			}
		}
	})(TextField);

	const ColorButton = withStyles({
		root: {
			backgroundColor: "#ff1800",
			'&:hover': {
				backgroundColor: "#ec1800",
			},
		},
	})(Button);
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_6fwcbpk', 'test', e.target, 'user_NpXuJHb2iHHl0d8uR2t5L')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	}
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<form className={classes.form} noValidate onSubmit={sendEmail}>
					<input type="hidden" name="contact_number" />
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<CssTextField
								autoComplete="fname"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Nome"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<CssTextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<CssTextField
								variant="outlined"
								required
								fullWidth
								name="phone"
								label="Telefone"
								type="tel"
								id="phone"
							/>
						</Grid>
					</Grid>
					<ColorButton
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Quero meu E-book
					</ColorButton>
				</form>
			</div>
		</Container>
	);
}