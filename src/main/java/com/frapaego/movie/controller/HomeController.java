package com.frapaego.movie.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	protected final Logger logger = LoggerFactory.getLogger(getClass());

	@RequestMapping("/home")
	public String home(final HttpServletRequest request, final Model model) {
		final Authentication auth = SecurityContextHolder.getContext().getAuthentication();

		final UserDetails user = ((UserDetails) auth.getPrincipal());

		String view = "home";
		final boolean errorValida = user.isAccountNonExpired();
		if (!errorValida) {
			model.addAttribute("errorPass", true);
			model.addAttribute("op", user.getUsername());
			view = "login";
		}

		return view;
	}

	@RequestMapping(value = "/login")
	public ModelAndView handleRequest(final HttpServletRequest request, final HttpServletResponse response)
			throws ServletException, IOException {

		logger.info("Returning login view ");
		return new ModelAndView("login");
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logoutPage(final HttpServletRequest request, final HttpServletResponse response) {
		final Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/login?logout";// You can redirect wherever you want, but generally it's a good practice to
										// show login screen again.
	}
}
