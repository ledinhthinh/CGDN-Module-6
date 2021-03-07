package vn.codegym.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.codegym.model.Customer;

import java.util.List;

public interface CustomerService { List<Customer> findAll();

    Page<Customer> findAll(Pageable pageable);

    void save(Customer customer);

    void update(Customer customer);

    void delete(String id);

    Customer findById(String id);

    Page<Customer> findAllByCustomerNameContaining(Pageable pageable,String nameSearch);

}
