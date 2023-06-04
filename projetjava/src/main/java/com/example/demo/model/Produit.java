package com.example.demo.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="participant")
public class Produit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="nom")

	private String nom;
	
	@Column(name="prenoms")
	private String prenoms;
	
	@Column(name="numero_tel")
	private String numero_tel;
	
	@Column(name="E_mail")
	private String E_mail;
	
	public Produit() {
		
	}
	
	public Produit(String nom, String prenoms, String numero_tel, String e_mail) {
		super();
		this.nom = nom;
		this.prenoms = prenoms;
		this.numero_tel = numero_tel;
		E_mail = e_mail;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenoms() {
		return prenoms;
	}
	public void setPrenoms(String prenoms) {
		this.prenoms = prenoms;
	}
	public String getNumero_tel() {
		return numero_tel;
	}
	public void setNumero_tel(String numero_tel) {
		this.numero_tel = numero_tel;
	}
	public String getE_mail() {
		return E_mail;
	}
	public void setE_mail(String e_mail) {
		E_mail = e_mail;
	}

}
