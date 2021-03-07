package vn.codegym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import vn.codegym.model.Customer;
import vn.codegym.repository.CustomerRepository;
import vn.codegym.service.CustomerService;

import java.util.List;

@RestController
@RequestMapping("/customer")
@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {
    private CustomerService customerService;
    private CustomerRepository customerRepository;
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Page<Customer>> showList(@PageableDefault(value = 5) Pageable pageable) {
        Page<Customer> customerPage = customerService.findAll(pageable);
        if(customerPage == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customerPage, HttpStatus.OK);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Customer> getById(@PathVariable("id") String id) {
        Customer customer = customerService.findById(id);
        if(customer == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public ResponseEntity<Customer> edit(@RequestBody Customer customer, @PathVariable String id) {
        customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @RequestMapping(value = "create", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public ResponseEntity<Customer> save(@RequestBody Customer customer) {
//        System.out.println(customer.getId());
        customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Customer> delete(@PathVariable String id) {
        customerService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
