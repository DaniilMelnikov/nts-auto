if (BX.Vue) {
    BX.ready(function () {
        BX.Vue.mutateComponent('BXmakerAuthuserphoneEnterRegForm', {
            name: 'BXmakerAuthuserphoneEnterRegForm',
            data() {
                return {
                    userType: '',
                    userTypeOptions: [
                        {id: 17, name: 'Розничный покупатель'},
                        {id: 16, name: 'Оптовый покупатель'},
                    ],
                };
            },
            created() {
                this.$set(this.$root.expandData, 'userType', 17);
            },
            methods: {
                onChangeUserType(value) {
                    this.$set(this.$root.expandData, 'userType', value);
                },
               
            },
            template: `
            <div class="bxmaker-authuserphone-enter-reg-form"  >
                 
                 <slot name="message" />  
                        <BXmakerAuthuserphoneMessage :message="$root.message" :error="$root.error" />
                   </slot>     
                   
                  
                   <div class="bxmaker-authuserphone-input bxmaker-authuserphone-input--custom-select ">
                       <div class="bxmaker-authuserphone-input__field">
                       <select name="USER_TYPE" autocomplete="off" @change="onChangeUserType"> 
                        <option v-for="type in userTypeOptions" :key="type.id" :value="type.id" :selected="type.id === userType">{{type.name}}</option>
                       </select>
                       </div> 
                   </div>
                      

					<slot name="last_name" v-if="$root.isEnabledRegisterLastName">                   
                        <BXmakerAuthuserphoneInput 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_LAST_NAME" 
                            :value="$root.lastname" 
                            @onInput="$root.setLastName" 
                            @onEnter="onEnterLastName"   
                            name="LastNAME" 
                            ref="lastname"
                        />
                    </slot> 
					<slot name="first_name" v-if="$root.isEnabledRegisterFirstName">                   
                        <BXmakerAuthuserphoneInput 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_FIRST_NAME" 
                            :value="$root.firstname" 
                            @onInput="$root.setFirstName" 
                            @onEnter="onEnterFirstName"   
                            name="FIRSTNAME" 
                            ref="firstname"
                        />
                    </slot> 
					<slot name="location" v-if="$root.isEnabledRegisterLocation">                   
                        <BXmakerAuthuserphoneInput 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_LOCATION" 
                            :value="$root.location" 
                            @onInput="$root.setLocation" 
                            @onEnter="onEnterLocation"   
                            name="LOCATION" 
                            ref="location"
                        />


                    <slot name="phone">        
                    
                      <BXmakerAuthuserphoneInputPhone  v-if="$root.isEnabledPhoneMask"
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_PHONE" 
                            :value="$root.phone" 
                            @onChange="onChangePhone" 
                            @onEnter="onEnterPhone" 
                            name="PHONE" 
                            :defaultCountry="$root.phoneMaskDefaultCountry"
                            :countryTopList="$root.phoneMaskCountryTopList"                          
                        />
                                  
                        <BXmakerAuthuserphoneInput v-else 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_PHONE" 
                            :value="$root.phone" 
                            @onInput="$root.setPhone"        
                            @onEnter="onEnterPhone"                    
                            name="PHONE" 
                        />
                    </slot>
                    <slot name="login" v-if="$root.isEnabledRegisterLogin">                   
                        <BXmakerAuthuserphoneInput 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_LOGIN" 
                            :value="$root.login" 
                            @onInput="$root.setLogin" 
                            @onEnter="onEnterLogin"   
                            name="LOGIN" 
                            ref="login"
                        />
                    </slot>
                    <slot name="email" v-if="$root.isEnabledRegisterEmail">                   
                        <BXmakerAuthuserphoneInput 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_EMAIL" 
                            :value="$root.email" 
                            @onInput="$root.setEmail" 
                            @onEnter="onEnterEmail"   
                            name="EMAIL" 
                            ref="email"
                        />
                    </slot>
                    
                     <slot name="pass" v-if="$root.isEnabledRegisterPassword">                   
                        <BXmakerAuthuserphoneInputPassword 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_PASSWORD" 
                            :value="$root.password" 
                            @onInput="$root.setPassword" 
                            @onEnter="onEnterPassword"   
                            name="PASSWORD" 
                            ref="password"
                        />
                    </slot>
                                                            
                    
                 <slot name="captcha">
                        <BXmakerAuthuserphoneCaptcha 
                            :code="$root.captchaCode"
                            :src="$root.captchaSrc"
                            :length="$root.captchaLength"
                            :loader="$root.captchaLoader"
                            @onInput="$root.setCaptchaCode"
                            @onComplete="onClickConfirm"
                            @onRefresh="$root.refreshCaptcha"
                           />  
                 </slot>   
                 
                 <slot name="consent" v-if="$root.isEnabledRequestConsent">
                    <BXmakerAuthuserphoneConsent
                        :button="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_BUTTON"
                        :text="$root.consentText"
                        :isReceived="$root.isConsentReceived"
                        @onAgree="onConsentAgree"
                        @onDisagree="$root.consentDisagree"
                        ref="consent"
                     />
                 </slot>   
                 
                     
                     <slot name="request">
                        <BXmakerAuthuserphoneButton 
                            :title="$root.localize.BXMAKER_AUTHUSERPHONE_ENTER_REG_FORM_BUTTON"  
                            :loader="$root.startLoader"
                            @onClick="onClickConfirm" 
                        />
                    </slot>
                   
                             
            </div>
        `,
        });
    });
}