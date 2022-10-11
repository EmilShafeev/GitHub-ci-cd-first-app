describe('some describe', () => {
	test('some test 1', () => {
		expect(1).toBe(1)
	})
	test('some test 2', () => {
		expect(2).not.toBe(1)
	})
	test('some test 3', () => {
		expect('feature-1').toBe('feature-1')
	})
	test('some test 4', () => {
		expect(3).not.toBe('feature-1')
	})
})
