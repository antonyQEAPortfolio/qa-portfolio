// ============================================
// PLAYWRIGHT API TESTING - HTTP METHODS
// Complete Examples from Beginner to Advanced
// ============================================

import { test, expect } from '@playwright/test';

// Base URL for our test API (using JSONPlaceholder - free fake API)
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// ============================================
// PART 1: GET REQUESTS (Reading Data)
// ============================================

test.describe('GET Requests - Reading Data', () => {
  
  test('GET - Retrieve all users', async ({ request }) => {
    // Send GET request
    const response = await request.get(`${BASE_URL}/users`);
    
    // Assert status code
    expect(response.status()).toBe(200);
    
    // Parse JSON response
    const users = await response.json();
    
    // Assertions
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
    console.log(`Total users: ${users.length}`);
  });

  test('GET - Retrieve single user by ID', async ({ request }) => {
    const userId = 1;
    const response = await request.get(`${BASE_URL}/users/${userId}`);
    
    expect(response.status()).toBe(200);
    
    const user = await response.json();
    
    // Validate response structure
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('username');
    
    // Validate data types
    expect(typeof user.id).toBe('number');
    expect(typeof user.name).toBe('string');
    expect(typeof user.email).toBe('string');
    
    console.log('User retrieved:', user.name);
  });

  test('GET - With query parameters (filtering)', async ({ request }) => {
    // Get posts by specific user
    const response = await request.get(`${BASE_URL}/posts`, {
      params: {
        userId: 1
      }
    });
    
    expect(response.status()).toBe(200);
    
    const posts = await response.json();
    
    // Verify all posts belong to userId 1
    posts.forEach(post => {
      expect(post.userId).toBe(1);
    });
    
    console.log(`User 1 has ${posts.length} posts`);
  });

  test('GET - Non-existent resource (404 error)', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/99999`);
    
    // Should return 404 Not Found
    expect(response.status()).toBe(404);
    
    console.log('404 error handled correctly');
  });

  test('GET - Validate response time', async ({ request }) => {
    const startTime = Date.now();
    
    const response = await request.get(`${BASE_URL}/users`);
    
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    
    expect(response.status()).toBe(200);
    expect(responseTime).toBeLessThan(3000); // Should respond within 3 seconds
    
    console.log(`Response time: ${responseTime}ms`);
  });
});

// ============================================
// PART 2: POST REQUESTS (Creating Data)
// ============================================

test.describe('POST Requests - Creating Data', () => {
  
  test('POST - Create new user', async ({ request }) => {
    const newUser = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com'
    };
    
    const response = await request.post(`${BASE_URL}/users`, {
      data: newUser
    });
    
    // POST creating new resource should return 201 Created
    expect(response.status()).toBe(201);
    
    const createdUser = await response.json();
    
    // Verify response includes what we sent
    expect(createdUser.name).toBe(newUser.name);
    expect(createdUser.username).toBe(newUser.username);
    expect(createdUser.email).toBe(newUser.email);
    
    // Verify server added an ID
    expect(createdUser).toHaveProperty('id');
    expect(createdUser.id).toBeGreaterThan(0);
    
    console.log('Created user with ID:', createdUser.id);
  });

  test('POST - Create new post', async ({ request }) => {
    const newPost = {
      title: 'My First Post',
      body: 'This is the content of my post',
      userId: 1
    };
    
    const response = await request.post(`${BASE_URL}/posts`, {
      data: newPost,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    expect(response.status()).toBe(201);
    
    const createdPost = await response.json();
    
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);
    expect(createdPost.userId).toBe(newPost.userId);
    expect(createdPost.id).toBeDefined();
    
    console.log('Created post:', createdPost);
  });

  test('POST - Validation error (missing required fields)', async ({ request }) => {
    // Send incomplete data
    const invalidUser = {
      name: 'John Doe'
      // Missing required fields
    };
    
    const response = await request.post(`${BASE_URL}/users`, {
      data: invalidUser
    });
    
    // Note: JSONPlaceholder is lenient, but real APIs should return 400 Bad Request
    // In production, you'd expect:
    // expect(response.status()).toBe(400);
    
    console.log('Validation test completed');
  });
});

// ============================================
// PART 3: PUT REQUESTS (Full Update)
// ============================================

test.describe('PUT Requests - Full Update', () => {
  
  test('PUT - Update entire user', async ({ request }) => {
    const userId = 1;
    
    // PUT requires sending ALL fields (complete replacement)
    const updatedUser = {
      id: userId,
      name: 'John Smith Updated',
      username: 'johnsmith_updated',
      email: 'johnupdated@example.com',
      phone: '123-456-7890',
      website: 'example.com'
    };
    
    const response = await request.put(`${BASE_URL}/users/${userId}`, {
      data: updatedUser
    });
    
    // PUT should return 200 OK
    expect(response.status()).toBe(200);
    
    const result = await response.json();
    
    // Verify all fields were updated
    expect(result.name).toBe(updatedUser.name);
    expect(result.email).toBe(updatedUser.email);
    expect(result.username).toBe(updatedUser.username);
    
    console.log('User fully updated:', result);
  });

  test('PUT - Update post', async ({ request }) => {
    const postId = 1;
    
    const updatedPost = {
      id: postId,
      title: 'Updated Post Title',
      body: 'This is the updated content of the post',
      userId: 1
    };
    
    const response = await request.put(`${BASE_URL}/posts/${postId}`, {
      data: updatedPost
    });
    
    expect(response.status()).toBe(200);
    
    const result = await response.json();
    
    expect(result.title).toBe(updatedPost.title);
    expect(result.body).toBe(updatedPost.body);
    
    console.log('Post updated successfully');
  });
});

// ============================================
// PART 4: PATCH REQUESTS (Partial Update)
// ============================================

test.describe('PATCH Requests - Partial Update', () => {
  
  test('PATCH - Update only specific fields', async ({ request }) => {
    const userId = 1;
    
    // PATCH only requires fields you want to update
    const partialUpdate = {
      email: 'newemail@example.com'
    };
    
    const response = await request.patch(`${BASE_URL}/users/${userId}`, {
      data: partialUpdate
    });
    
    expect(response.status()).toBe(200);
    
    const result = await response.json();
    
    // Verify updated field
    expect(result.email).toBe(partialUpdate.email);
    
    console.log('Email updated via PATCH:', result.email);
  });

  test('PATCH vs PUT - Understanding the difference', async ({ request }) => {
    const postId = 1;
    
    // PATCH: Update only title, keep everything else
    const patchData = {
      title: 'Only Title Changed'
    };
    
    const patchResponse = await request.patch(`${BASE_URL}/posts/${postId}`, {
      data: patchData
    });
    
    expect(patchResponse.status()).toBe(200);
    const patchResult = await patchResponse.json();
    
    // With PATCH, other fields remain unchanged
    expect(patchResult.title).toBe(patchData.title);
    expect(patchResult.body).toBeDefined(); // Body still exists
    
    console.log('PATCH result:', patchResult);
  });
});

// ============================================
// PART 5: DELETE REQUESTS (Removing Data)
// ============================================

test.describe('DELETE Requests - Removing Data', () => {
  
  test('DELETE - Remove a user', async ({ request }) => {
    const userId = 1;
    
    const response = await request.delete(`${BASE_URL}/users/${userId}`);
    
    // DELETE can return 200 OK or 204 No Content
    expect([200, 204]).toContain(response.status());
    
    console.log('User deleted successfully');
  });

  test('DELETE - Remove a post', async ({ request }) => {
    const postId = 1;
    
    const response = await request.delete(`${BASE_URL}/posts/${postId}`);
    
    expect([200, 204]).toContain(response.status());
    
    console.log('Post deleted successfully');
  });

  test('DELETE - Try to delete non-existent resource', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/99999`);
    
    // Could return 404 Not Found or 204 No Content depending on API design
    console.log('Delete non-existent resource status:', response.status());
  });
});

// ============================================
// PART 6: COMPLETE CRUD WORKFLOW
// ============================================

test.describe('Complete CRUD Workflow', () => {
  
  test('Full CRUD cycle - Create, Read, Update, Delete', async ({ request }) => {
    // 1. CREATE - POST
    console.log('Step 1: Creating new post...');
    const newPost = {
      title: 'Test Post for CRUD',
      body: 'This is a test post',
      userId: 1
    };
    
    const createResponse = await request.post(`${BASE_URL}/posts`, {
      data: newPost
    });
    
    expect(createResponse.status()).toBe(201);
    const createdPost = await createResponse.json();
    const postId = createdPost.id;
    
    console.log(`Created post with ID: ${postId}`);
    
    // 2. READ - GET
    console.log('Step 2: Reading the created post...');
    const readResponse = await request.get(`${BASE_URL}/posts/${postId}`);
    
    expect(readResponse.status()).toBe(200);
    const readPost = await readResponse.json();
    
    expect(readPost.title).toBe(newPost.title);
    console.log('Post retrieved successfully');
    
    // 3. UPDATE - PUT
    console.log('Step 3: Updating the post...');
    const updatedData = {
      id: postId,
      title: 'Updated Title',
      body: 'Updated content',
      userId: 1
    };
    
    const updateResponse = await request.put(`${BASE_URL}/posts/${postId}`, {
      data: updatedData
    });
    
    expect(updateResponse.status()).toBe(200);
    const updatedPost = await updateResponse.json();
    
    expect(updatedPost.title).toBe(updatedData.title);
    console.log('Post updated successfully');
    
    // 4. DELETE - DELETE
    console.log('Step 4: Deleting the post...');
    const deleteResponse = await request.delete(`${BASE_URL}/posts/${postId}`);
    
    expect([200, 204]).toContain(deleteResponse.status());
    console.log('Post deleted successfully');
    
    // 5. VERIFY DELETION - GET (should fail)
    console.log('Step 5: Verifying deletion...');
    const verifyResponse = await request.get(`${BASE_URL}/posts/${postId}`);
    
    // Note: JSONPlaceholder might still return data, but real APIs should return 404
    console.log('CRUD cycle completed successfully!');
  });
});

// ============================================
// PART 7: ADVANCED SCENARIOS
// ============================================

test.describe('Advanced HTTP Method Testing', () => {
  
  test('Multiple requests in sequence', async ({ request }) => {
    // Get all posts
    const postsResponse = await request.get(`${BASE_URL}/posts`);
    const posts = await postsResponse.json();
    
    // Get user for first post
    const firstPost = posts[0];
    const userResponse = await request.get(`${BASE_URL}/users/${firstPost.userId}`);
    const user = await userResponse.json();
    
    // Get comments for first post
    const commentsResponse = await request.get(`${BASE_URL}/posts/${firstPost.id}/comments`);
    const comments = await commentsResponse.json();
    
    console.log(`Post "${firstPost.title}" by ${user.name} has ${comments.length} comments`);
  });

  test('Parallel requests for better performance', async ({ request }) => {
    const startTime = Date.now();
    
    // Execute multiple requests in parallel using Promise.all
    const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
      request.get(`${BASE_URL}/users`),
      request.get(`${BASE_URL}/posts`),
      request.get(`${BASE_URL}/comments`)
    ]);
    
    const endTime = Date.now();
    
    // All should succeed
    expect(usersResponse.status()).toBe(200);
    expect(postsResponse.status()).toBe(200);
    expect(commentsResponse.status()).toBe(200);
    
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
    const comments = await commentsResponse.json();
    
    console.log(`Parallel requests completed in ${endTime - startTime}ms`);
    console.log(`Retrieved ${users.length} users, ${posts.length} posts, ${comments.length} comments`);
  });

  test('Custom headers in requests', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Playwright-Test',
        'X-Custom-Header': 'test-value'
      }
    });
    
    expect(response.status()).toBe(200);
    
    // Check response headers
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');
    
    console.log('Custom headers sent successfully');
  });

  test('Query string with multiple parameters', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/comments`, {
      params: {
        postId: 1,
        _limit: 5 // JSONPlaceholder supports pagination
      }
    });
    
    expect(response.status()).toBe(200);
    
    const comments = await response.json();
    
    expect(comments.length).toBeLessThanOrEqual(5);
    comments.forEach(comment => {
      expect(comment.postId).toBe(1);
    });
    
    console.log(`Retrieved ${comments.length} comments for post 1`);
  });
});

// ============================================
// PART 8: ERROR HANDLING
// ============================================

test.describe('Error Handling', () => {
  
  test('Handle network errors gracefully', async ({ request }) => {
    try {
      // Try to access invalid URL
      const response = await request.get('https://invalid-url-that-does-not-exist.com');
      
      console.log('Should not reach here');
    } catch (error) {
      console.log('Network error caught:', error.message);
      expect(error).toBeDefined();
    }
  });

  test('Handle different error status codes', async ({ request }) => {
    // 404 Not Found
    const notFoundResponse = await request.get(`${BASE_URL}/users/99999`);
    expect(notFoundResponse.status()).toBe(404);
    
    console.log('Error responses handled correctly');
  });
});

