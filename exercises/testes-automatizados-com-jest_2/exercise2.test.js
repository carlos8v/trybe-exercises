const users = {
	4: { name: 'Mark' },
	5: { name: 'Paul' },
};

const findUserById = (id) => {
	return new Promise((resolve, reject) => {
		if (users[id]) {
			return resolve(users[id]);
		}

		return reject({ error: 'User with ' + id + ' not found.' });
	});
};

const getUserName = (userID) => {
	return findUserById(userID).then((user) => user.name);
};

describe('getUserName', () => {
  it('should get existence user', () => {
    expect.assertions(2);
    return getUserName(4).then((data) => {
      expect(data).not.toBeNull();
      expect(data).toBe('Mark');
    });
  });

  it('should not get nonexistent user', () => {
    expect.assertions(1);
    return getUserName(6).catch((error) => {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    });
  });
});