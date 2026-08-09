import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Camada de resiliência: captura falhas de render de sub-árvores
 * evitando que um erro isolado derrube a página inteira.
 */
class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="py-16 text-center text-muted-foreground text-sm">
            Não foi possível carregar esta seção.
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
