package com.kb.starbucks.dao;

import com.kb.starbucks.vo.Customer;

public class CustomerDAOArray implements CustomerDAO{
    private Customer[] customers;
    private int totalCnt;
    public CustomerDAOArray(int size) {
        customers = new Customer[size];
    }

    @Override
    public void insert(Customer customer){
        customers[totalCnt] = customer;
        totalCnt++;
    }
    public Customer findById(String id){
        for(int i=0; i<totalCnt; i++){
            if(id.equals(customers[i].getId())){
                return customers[i];
            }
        }
        return null;
    }
}
