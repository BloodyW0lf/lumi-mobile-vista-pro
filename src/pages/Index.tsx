
import React from 'react';
import { Phone, Battery, Projector, Star, MapPin, Phone as PhoneIcon, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Phone className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white">TechMobile Pro</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</a>
                <a href="#productos" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Productos</a>
                <a href="#reseñas" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Reseñas</a>
                <a href="#social" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Proyecto Social</a>
                <a href="#contacto" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Producto Estrella */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">
                🚀 PRODUCTO ESTRELLA - ÚLTIMA GENERACIÓN
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                PowerVision Pro
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Con Proyector Integrado
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                El primer smartphone con proyector 4K integrado y sistema de doble batería de 10,000mAh. 
                Revoluciona tu experiencia móvil con tecnología de vanguardia.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Projector className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-white font-medium">Proyector 4K</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Battery className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-white font-medium">Doble Batería 10,000mAh</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Phone className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-white font-medium">5G Ultra</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
                  Comprar Ahora - $1,299
                </button>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="border-2 border-white/30 hover:border-white text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
                      Ver Especificaciones
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-purple-900 border-purple-500/30">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Phone className="h-6 w-6 text-purple-400 mr-2" />
                        PowerVision Pro - Especificaciones Técnicas
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Especificaciones Generales */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-purple-400 mb-4">📱 General</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Pantalla:</span>
                            <span className="text-white">6.8" AMOLED 4K (3840x2160)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Procesador:</span>
                            <span className="text-white">Snapdragon 8 Gen 3</span>
                          </div>
                          <div className="flex justify-between">
                            <span>RAM:</span>
                            <span className="text-white">16GB LPDDR5X</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Almacenamiento:</span>
                            <span className="text-white">512GB UFS 4.0</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sistema:</span>
                            <span className="text-white">Android 14</span>
                          </div>
                        </div>
                      </div>

                      {/* Proyector */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-purple-400 mb-4">📽️ Proyector Integrado</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Resolución:</span>
                            <span className="text-white">4K UHD (3840x2160)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Brillo:</span>
                            <span className="text-white">2000 ANSI Lúmenes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tamaño proyección:</span>
                            <span className="text-white">30" a 300"</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tecnología:</span>
                            <span className="text-white">DLP + LED</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duración lámpara:</span>
                            <span className="text-white">50,000 horas</span>
                          </div>
                        </div>
                      </div>

                      {/* Batería */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-green-400 mb-4">🔋 Sistema de Doble Batería</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Capacidad total:</span>
                            <span className="text-white">10,000mAh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Batería principal:</span>
                            <span className="text-white">6,000mAh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Batería proyector:</span>
                            <span className="text-white">4,000mAh</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Carga rápida:</span>
                            <span className="text-white">120W SuperCharge</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Carga inalámbrica:</span>
                            <span className="text-white">50W Qi</span>
                          </div>
                        </div>
                      </div>

                      {/* Cámara */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">📸 Sistema de Cámaras</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Principal:</span>
                            <span className="text-white">200MP f/1.4 OIS</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ultra gran angular:</span>
                            <span className="text-white">50MP f/2.2 120°</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Teleobjetivo:</span>
                            <span className="text-white">50MP f/2.8 5x zoom</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Frontal:</span>
                            <span className="text-white">32MP f/2.0</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Video:</span>
                            <span className="text-white">8K@30fps, 4K@120fps</span>
                          </div>
                        </div>
                      </div>

                      {/* Conectividad */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">📡 Conectividad</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Red:</span>
                            <span className="text-white">5G mmWave/Sub-6</span>
                          </div>
                          <div className="flex justify-between">
                            <span>WiFi:</span>
                            <span className="text-white">WiFi 7 (802.11be)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bluetooth:</span>
                            <span className="text-white">5.4 LE</span>
                          </div>
                          <div className="flex justify-between">
                            <span>USB:</span>
                            <span className="text-white">USB-C 3.2</span>
                          </div>
                          <div className="flex justify-between">
                            <span>NFC:</span>
                            <span className="text-white">Sí</span>
                          </div>
                        </div>
                      </div>

                      {/* Construcción */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-red-400 mb-4">🏗️ Construcción</h3>
                        <div className="space-y-3 text-gray-300">
                          <div className="flex justify-between">
                            <span>Materiales:</span>
                            <span className="text-white">Titanio + Vidrio Gorilla Glass Victus 3</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Resistencia:</span>
                            <span className="text-white">IP68</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Dimensiones:</span>
                            <span className="text-white">165 x 76 x 12.5 mm</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Peso:</span>
                            <span className="text-white">285g</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Colores:</span>
                            <span className="text-white">Negro Titanio, Púrpura Aurora</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                      <h3 className="text-xl font-bold text-white mb-3">✨ Características Exclusivas</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Proyección sin cables hasta 300 pulgadas</li>
                        <li>• Batería inteligente que prioriza uso según necesidad</li>
                        <li>• Modo cine con audio Dolby Atmos integrado</li>
                        <li>• Asistente IA para optimización automática de proyección</li>
                        <li>• Carga ultra rápida 0-80% en 25 minutos</li>
                        <li>• Resistente a caídas desde 2 metros</li>
                      </ul>
                    </div>

                    <div className="mt-6 text-center">
                      <div className="text-3xl font-bold text-white mb-2">$1,299 USD</div>
                      <div className="text-gray-400 line-through mb-2">Precio original: $1,599</div>
                      <div className="text-green-400 font-semibold mb-4">¡Ahorras $300!</div>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105">
                        Comprar Ahora
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
                  <div className="bg-black rounded-xl overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=400&fit=crop" 
                      alt="PowerVision Pro - Smartphone con proyector integrado" 
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">$1,299</div>
                    <div className="text-gray-400 line-through">$1,599</div>
                    <div className="text-green-400 font-semibold">Ahorra $300</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">¿Quiénes Somos?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos líderes en la importación y venta de tecnología móvil de vanguardia, 
              comprometidos con llevar la innovación a tus manos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h3>
              <p className="text-gray-300 leading-relaxed">
                Democratizar el acceso a la tecnología móvil más avanzada del mundo, 
                ofreciendo productos innovadores que transforman la vida digital de nuestros clientes, 
                siempre con la mejor calidad y servicio personalizado.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Visión</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser la empresa líder en Latinoamérica en la comercialización de dispositivos móviles 
                de última generación, reconocida por nuestra excelencia en servicio al cliente 
                y nuestro compromiso con la innovación tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Productos */}
      <section id="productos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nuestra Galería de Productos</h2>
            <p className="text-xl text-gray-300">Descubre nuestra colección exclusiva de smartphones importados</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto Estrella */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 transform hover:scale-105 transition-all">
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=300&fit=crop" 
                  alt="PowerVision Pro" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">PowerVision Pro</h3>
                <p className="text-gray-300 text-sm mb-4">Proyector 4K + Doble Batería 10,000mAh</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-4">$1,299</div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg w-full hover:opacity-90 transition-opacity">
                  Comprar Ahora
                </button>
              </div>
            </div>

            {/* Otros Productos */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" 
                  alt="AquaPhone Ultra" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">AquaPhone Ultra</h3>
                <p className="text-gray-300 text-sm mb-4">Resistente al agua IP68 + Cámara 200MP</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-4">$899</div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors">
                  Comprar Ahora
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all">
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=300&fit=crop" 
                  alt="GameMaster Pro" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">GameMaster Pro</h3>
                <p className="text-gray-300 text-sm mb-4">Gaming 144Hz + Refrigeración líquida</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-4">$1,099</div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors">
                  Comprar Ahora
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-red-500/30 transition-all">
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop" 
                  alt="SpeedCharge Elite" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">SpeedCharge Elite</h3>
                <p className="text-gray-300 text-sm mb-4">Carga ultra rápida 300W + 5G mmWave</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-4">$799</div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors">
                  Comprar Ahora
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all">
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop" 
                  alt="CameraKing Max" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">CameraKing Max</h3>
                <p className="text-gray-300 text-sm mb-4">Cámara 500MP + IA fotográfica avanzada</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-4">$1,199</div>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors">
                  Comprar Ahora
                </button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all">
              <div className="bg-black rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop" 
                  alt="FoldTech Revolution" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">FoldTech Revolution</h3>
                <p className="text-gray-300 text-sm mb-4">Pantalla plegable + Multitarea avanzada</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="h-4 w-4 text-gray-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-4">$1,499</div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reseñas de Clientes */}
      <section id="reseñas" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-300">Testimonios reales de clientes satisfechos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Carlos Mendoza" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Carlos Mendoza</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "El PowerVision Pro superó todas mis expectativas. El proyector integrado es increíble para presentaciones y entretenimiento. La batería dura todo el día sin problemas."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" alt="María González" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-white font-semibold">María González</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Excelente servicio al cliente y productos de calidad excepcional. Mi AquaPhone Ultra resistió una caída al agua y sigue funcionando perfectamente."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Roberto Silva" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Roberto Silva</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "Como gamer, el GameMaster Pro es simplemente perfecto. Los 144Hz hacen que todos los juegos se vean increíbles y nunca se sobrecalienta."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" alt="Ana Rodríguez" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Ana Rodríguez</h4>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "La cámara del CameraKing Max toma fotos profesionales. Estoy impresionada con la calidad y las funciones de IA para fotografía."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" alt="Diego Torres" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-white font-semibold">Diego Torres</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                "La carga ultra rápida del SpeedCharge Elite es revolucionaria. En 15 minutos tengo batería para todo el día. Increíble tecnología."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto Social */}
      <section id="social" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Nuestro Compromiso Social</h2>
            <p className="text-xl text-gray-300">Tecnología que transforma comunidades</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-green-500/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Proyecto "Conectando Futuros"</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-green-400 mb-2">El Problema</h4>
                    <p className="text-gray-300">
                      En comunidades rurales de América Latina, más del 40% de los estudiantes no tienen acceso 
                      a dispositivos móviles para educación digital, limitando su desarrollo académico y 
                      oportunidades futuras en un mundo cada vez más conectado.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-2">Nuestra Solución</h4>
                    <p className="text-gray-300">
                      Donamos smartphones educativos equipados con aplicaciones de aprendizaje, contenido 
                      offline y conectividad subsidiada para estudiantes de escasos recursos, 
                      junto con programas de capacitación digital para docentes.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">15 Comunidades</div>
                      <div className="text-gray-300">Beneficiadas</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">$2.5M USD</div>
                      <div className="text-gray-300">Invertidos</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-black/40 rounded-2xl p-6">
                  <img 
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop" 
                    alt="Estudiantes usando tecnología" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h5 className="text-lg font-semibold text-white mb-2">Impacto Real</h5>
                    <p className="text-gray-300 text-sm">
                      Más de 3,000 estudiantes ya tienen acceso a educación digital gracias a este proyecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Contáctanos</h2>
            <p className="text-xl text-gray-300">Estamos aquí para ayudarte con tu próxima compra</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <MapPin className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
              <p className="text-gray-300">
                Av. Tecnología 1234<br />
                Centro Comercial Tech Plaza<br />
                Lima, Perú 15001
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <PhoneIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
              <p className="text-gray-300">
                +51 1 234-5678<br />
                +51 987-654-321<br />
                WhatsApp: +51 999-123-456
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">
                ventas@techmobilepro.com<br />
                soporte@techmobilepro.com<br />
                info@techmobilepro.com
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors">
                <Twitter className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold text-white">TechMobile Pro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Innovación tecnológica al alcance de todos
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 TechMobile Pro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
