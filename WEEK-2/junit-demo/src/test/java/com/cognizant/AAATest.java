package com.cognizant;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest{

    private AAA calculator;

    @Before
    public void setUp() {
        calculator = new AAA();
    }

    @After
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAdd() {
        // Arrange is done in setUp
        // Act
        int result = calculator.add(2, 3);
        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        int result = calculator.subtract(5, 3);
        assertEquals(2, result);
    }
}
