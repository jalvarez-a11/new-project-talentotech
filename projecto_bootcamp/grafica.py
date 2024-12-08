import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Datos para la gráfica
categories = ['Eólica', 'Solar', 'Hidroeléctrica', 'Biomasa', 'Geotermia']
values = [1200, 950, 3000, 700, 400]

# Crear la gráfica
plt.figure(figsize=(10, 6))  # Tamaño de la gráfica
plt.bar(categories, values, color=['blue', 'orange', 'green', 'red', 'purple'])
plt.title('Producción en TWh (2023)', fontsize=16)
plt.xlabel('Fuentes de Energía', fontsize=12)
plt.ylabel('Producción (TWh)', fontsize=12)
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Guardar la gráfica como imagen
plt.savefig('grafica_produccion.png')
plt.close()
