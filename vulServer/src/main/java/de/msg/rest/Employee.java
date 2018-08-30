package de.msg.rest;

public class Employee {

	public Employee(String name, int age, String code) {
		super();
		this.name = name;
		this.age = age;
		this.code = code;
	}

	private String name;
	private int age;
	private String code;

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
