<template>
    <v-container secondary fill-height fluid>
        <!-- <v-row>
            <v-col cols="12" md="8">
                <v-card
                    color="secondary"
                    tile
                >
                    <v-card-text>
                        <v-row justify="center" v-if="!premium && !custom">
                            <v-col cols="4" class="text-center">
                                    <v-card
                                        tile
                                        color="primary"
                                        class="py-3 font-weight-bold"
                                        @click="setType('custom')"
                                    >
                                        {{ $t('order.custom').toUpperCase() }}
                                    </v-card>
                            </v-col>
                            <v-col cols="4" class="text-center">
                                <v-card
                                    tile
                                    color="primary"
                                    class="py-3 font-weight-bold"
                                    @click="setType('premium')"
                                    >
                                        {{ $t('order.premium').toUpperCase() }}
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row justify="center" v-if="premium">
                            <v-col cols="12">
                                <div v-if="currentStep === 1">
                                    <v-row justify="center">
                                        <v-col cols="12" md="4">
                                            <v-img src="../assets/laPistacchio2.jpg" :to="{ name: 'Premium' }"></v-img>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <v-img src="../assets/whiteJaffa3.jpg"></v-img>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col cols="12" md="4">
                                            <v-img src="../assets/american-pie.jpg"></v-img>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <v-img src="../assets/ruby1.jpg"></v-img>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row justify="center" v-if="custom">
                            <v-col cols="12">
                                <div v-if="currentStep === 1">
                                    <v-row justify="center">
                                        <v-col cols="3" class="text-center">
                                            <v-card
                                                tile
                                                color="primary"
                                                class="py-3 font-weight-bold"
                                                @click="setTaste('sweet')"
                                            >
                                                {{ $t(`sweet`).toUpperCase() }}
                                            </v-card>
                                        </v-col>
                                        <v-col cols="3" class="text-center">
                                            <v-card
                                                tile
                                                color="primary"
                                                class="py-3 font-weight-bold"
                                                @click="setTaste('salty')"
                                            >
                                                {{ $t(`salty`).toUpperCase() }}
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div v-if="currentStep === 2">
                                    <OrderList :data="taste" :conditions="[ $t('base') ]"></OrderList>
                                </div>
                                <div v-if="currentStep === 3">
                                    <OrderList :data="taste" :conditions="[ $t('spread') ]"></OrderList>
                                </div>
                                <div v-if="currentStep === 4">
                                    <OrderList :data="taste" :conditions="[ $t('filling') ]"></OrderList>
                                </div>
                                <div v-if="currentStep === 5">
                                    <OrderList :data="taste" :conditions=" $t('topping') "></OrderList>
                                </div>
                                <div v-if="currentStep === 6">
                                    <OrderList :data="taste" :conditions=" $t('drink') "></OrderList>
                                </div>
                                <div v-if="currentStep === 7">
                                    <OrderList :data="taste" :conditions=" $t('topping') "></OrderList>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn 
                            @click="previousStep()"
                            v-if="!isFirstStep()"
                            text
                        >
                            <v-icon>mdi-arrow-left-bold</v-icon>
                            {{ $t('order.previous') }}
                        </v-btn>
                        <v-btn
                            @click="nextStep()"
                            v-if="!isLastStep()"
                            text
                        >    
                            {{ $t('order.next') }}
                            <v-icon>mdi-arrow-right-bold</v-icon>
                        </v-btn>
                        <v-btn
                            v-if="isLastStep()"
                            @click="addToCart()"
                            text
                        ><v-icon>mdi-basket-plus</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card
                    color="success"
                    tile
                >
                    <v-card-title class="secondary--text">
                        {{ $t('order.cart') }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn
                            color="secondary"
                            @click="sendOrder()"
                            text
                        >
                            {{ $t('order.send') }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>

        </v-row> -->
        <!-- <v-row>
            <v-breadcrumbs :items="routes">
                <v-breadcrumbs-item :to="route"></v-breadcrumbs-item>
            </v-breadcrumbs>
        </v-row> -->
        <v-row justify="center" align="center">
            <v-col cols="12" md="8">
                <v-row justify="center" v-if="isFirstStep()">
                    <v-col cols="8" md="4" class="d-flex justify-center">
                        <v-btn
                            color="primary"
                            text
                            height="6rem"
                            width="15rem"
                            class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text v-btn__border"
                            @click="setPremium()" 
                        >
                            {{ $t('order.premium') }}
                        </v-btn>
                    </v-col>
                    <v-col cols="8" md="4" class="d-flex justify-center">
                        <v-btn
                            color="primary"
                            text
                            height="6rem" 
                            width="15rem"
                            class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text v-btn__border"
                            @click="setCustom()" 
                        >
                            {{ $t('order.custom') }}
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="premium">
                    <v-col cols="12" md="4">
                        <v-img src="../assets/laPistacchio2.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-img src="../assets/whiteJaffa3.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-img src="../assets/american-pie.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-img src="../assets/ruby1.jpg"></v-img>
                    </v-col>
                </v-row>
                <v-row justify="center" v-if="custom">
                    <v-col cols="8" md="4" class="d-flex justify-center">
                        <v-btn
                            color="primary"
                            text
                            height="6rem" 
                            width="15rem"
                            class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text v-btn__border"
                            @click="setTaste('sweet')" 
                        >
                            {{ $t('sweet') }}
                        </v-btn>
                    </v-col>
                    <v-col cols="8" md="4" class="d-flex justify-center">
                        <v-btn
                            color="primary"
                            text
                            height="6rem" 
                            width="15rem"
                            class="text-h5 text-md-h4 rounded-pill font-weight-bold primary--text v-btn__border"
                            @click="setTaste('salty')" 
                        >
                            {{ $t('salty') }}
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row 
                    v-for="(items, key) in taste"
                    :key="items.id"
                    justify="center" 
                >
                    <template v-for="item in items">
                        <v-col
                            :key="item.id"
                            v-if="currentStep == 2 && key === 'Osnova'"
                            cols="3"
                        >
                            <v-card>
                                <v-img src="../assets/logo.png"></v-img>
                                <v-card-title>
                                    {{ item.name }}
                                </v-card-title>
                                <v-card-subtitle>
                                    {{ item.price }}
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn 
                                        @click="addToCart(item)" 
                                        class="rounded-pill"
                                        color="primary"
                                    >
                                        Dodaj
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </template>
                </v-row>
                <v-row 
                    v-for="(items, key) in taste"
                    :key="items.id"
                    justify="center" 
                >
                    <v-col
                        v-if="currentStep == 3 && (key === 'Premium namazi' || key === 'Sladki namazi')"
                        cols="3"
                    >
                        <template v-for="item in items">
                            <v-card :key="item.id">
                                <v-card-title>
                                    {{ item.name }}
                                </v-card-title>
                                <v-card-subtitle>
                                    {{ item.price }}
                                </v-card-subtitle>
                            </v-card>
                        </template>
                    </v-col>
                </v-row>
            </v-col>
            <v-row v-for="item in cart" :key="item.id"> {{ item }}</v-row>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "Order",
    data() {
        return {
            items: [],
            taste: [],
            cart: [],
            premium: false,
            currentStep: 0,
            custom: false,
            cartStorage: ''
        };
    },
    created() {
        this.getItems();
    },
    methods: {
        getItems() {
			axios.get('http://192.168.0.26:4000/api/items')
				.then(items => {
					this.items = items.data;
				})
				.catch(errors => this.errors = errors);
		},
        addToCart(item) {
            if (!localStorage.getItem('cart'));
            this.cart.push({ name: item.name, price: item.price });
            localStorage.setItem('cart', this.cart);
        },
        totalSteps() {
            return this.steps.length;
        },
        previousStep() {
            this.currentStep--;
        },
        nextStep() {
            this.currentStep++;
        },
        isFirstStep() {
            return this.currentStep === 0;
        },
        setPremium() {
            this.premium = true;
            this.nextStep();
        },
        setCustom() {
            this.custom = true;
            this.nextStep();
        },
        setTaste(key) {
            this.taste = this.items[key];
            this.nextStep();
        },
        isLastStep() {
            return this.currentStep === this.totalSteps() - 1;
        },
        seeCart() {
            this.cartStorage = localStorage.getItem('cart');
        }
  },
};
</script>

<style scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .v-btn__border {
		border: 5px solid #fda47e;
	}
</style>
