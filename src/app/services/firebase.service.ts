import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
	listings: FirebaseListObservable<any[]>;
	listing: FirebaseObjectObservable<any>;
	folder: any;

	constructor(private af: AngularFire) {
		this.folder = 'listingimages';
		this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;	
	}

	getListings() {
		return this.listings;
	}

	getListingDetail(id) {
		this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
		return this.listing;
	}

	deleteListing(id) {
		return this.listings.remove(id);
	}
}

interface Listing {
	$key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}