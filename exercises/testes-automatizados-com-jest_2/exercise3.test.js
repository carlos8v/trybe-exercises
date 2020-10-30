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
	it('should get existence user', async (done) => {
		expect.assertions(2);
    await expect(getUserName(4)).resolves.not.toBeNull();
    await expect(getUserName(4)).resolves.toBe('Mark');
    done();
	});

	it('should not get nonexistent user', async (done) => {
		expect.assertions(1);
    await expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' });
    done();
	});
});
