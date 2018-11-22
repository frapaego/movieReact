package com.frapaego.movie.exception;

import org.springframework.validation.BindingResult;

public class InvalidRequestException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private final BindingResult errors;

	public InvalidRequestException(final BindingResult errors) {
		this.errors = errors;
	}

	public BindingResult getErrors() {
		return this.errors;
	}
}
