package com.cognizant;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;

public class MyServiceVerifyTest {

    @Test
    public void testVerifyInteraction() {
        // 1. create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // 2. pass the mock to service
        MyService service = new MyService(mockApi);

        // 3. call the method
        service.fetchData();

        // 4. verify that the mock method was called
        verify(mockApi).getData();
    }
}
