package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Produit;
import com.example.demo.repository.ProduitRepository;

@RestController
@CrossOrigin(origins="*")
public class ProduitController {
	
	@Autowired
	private ProduitRepository produitRepository;
	
	//affichez tous les Produit 
	@GetMapping("/participant")
	public List<Produit> getAllProduits(){
		return produitRepository.findAll();	
	} 
	
	//ajoutez des Produit
	@PostMapping("/participant")
	public Produit ajoutezProduit(@RequestBody Produit produit) {
		return produitRepository.save(produit);
	}
	
	//récuperer id dans url
	@GetMapping("/participant/{id}")
	public ResponseEntity <Produit> getproduits(@PathVariable Long id) {
		Produit produit = produitRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("aucun produit n'a ce id:"+id));
		return ResponseEntity.ok(produit);
	}
	
	
	//modifier produits
	@PutMapping("/participant/{id}")
	public ResponseEntity <Produit> modifiezProduits(@PathVariable Long id,@RequestBody Produit produitDetails){
		Produit produit = produitRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("aucun produit n'a ce id:"+id));
		produit.setNom(produitDetails.getNom());
		produit.setPrenoms(produitDetails.getPrenoms());
		produit.setPrenoms(produitDetails.getPrenoms());
		produit.setE_mail(produitDetails.getE_mail());
		
		Produit modifiezProduit = produitRepository.save(produit);
		return ResponseEntity.ok(modifiezProduit);
		
	}
	//supprimer produits
	@DeleteMapping("/participant/{id}")
	public ResponseEntity<Map<String, Boolean>> supprimezproduit(@PathVariable Long id){
		Produit produit = produitRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("aucun produit n'a ce id:"+id));
		produitRepository.delete(produit);
		Map<String, Boolean> reponse = new HashMap<>();
		reponse.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(reponse);
		
	}
	
	
	
}

